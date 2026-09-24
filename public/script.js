const linkConfig = window.FORGENT_LINKS || {};
const pendingPostHogEvents = [];

function isHomepage() {
  return /^\/(?:en|zh)?\/?$/.test(window.location.pathname);
}

function trackEvent(eventName, properties = {}, options = {}) {
  if (!window.posthog || !eventName) {
    pendingPostHogEvents.push([eventName, properties, options]);
    return;
  }

  window.posthog.capture(
    eventName,
    {
      locale: getCurrentLocale(),
      path: window.location.pathname,
      ...properties,
    },
    options
  );
}

function flushPendingPostHogEvents() {
  while (pendingPostHogEvents.length && window.posthog) {
    const [eventName, properties, options] = pendingPostHogEvents.shift();
    trackEvent(eventName, properties, options);
  }
}

function getCurrentLocale() {
  const urlLocale = new URLSearchParams(window.location.search).get("lang");
  if (urlLocale === "zh" || urlLocale === "en") {
    return urlLocale;
  }

  if (window.location.pathname.startsWith("/zh")) {
    return "zh";
  }

  if (document.documentElement.lang.toLowerCase().startsWith("zh")) {
    return "zh";
  }

  return "en";
}

function withLocaleParam(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }

  try {
    const url = new URL(href, window.location.origin);
    url.searchParams.set("lang", getCurrentLocale());
    return url.toString();
  } catch {
    return href;
  }
}

function applyLinks(selector, value, fallback, options = {}) {
  const href = value && !value.includes("your-") ? value : fallback;
  const resolvedHref = options.includeLocale ? withLocaleParam(href) : href;
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute("href", resolvedHref);
    node.setAttribute("target", resolvedHref.startsWith("http") ? "_blank" : "_self");
    node.setAttribute("rel", resolvedHref.startsWith("http") ? "noreferrer" : "");
  });
}

/** Bind a node once: client-side navigation re-runs initPage over a fresh DOM, and a node kept across
 *  navigations must not pick up a second listener. */
function bindOnce(node, key) {
  const flag = `forgent${key}`;
  if (node.dataset[flag]) return false;
  node.dataset[flag] = "1";
  return true;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

let heroPreviewReturnFocus = null;

function closeHeroPreview() {
  const lightbox = document.querySelector(".js-hero-preview-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("hero-preview-open");
  if (heroPreviewReturnFocus) {
    heroPreviewReturnFocus.focus();
    heroPreviewReturnFocus = null;
  }
}

function openHeroPreview(trigger) {
  const lightbox = document.querySelector(".js-hero-preview-lightbox");
  const source = document.querySelector(".js-hero-preview-source");
  const image = document.querySelector(".js-hero-preview-image");
  if (!lightbox || !image) return;
  const webp = trigger.dataset.previewSrc || "";
  const fallback = trigger.dataset.previewFallback || "";
  const alt = trigger.dataset.previewAlt || "Preview image";
  if (source) {
    if (webp) {
      source.setAttribute("srcset", webp);
    } else {
      source.removeAttribute("srcset");
    }
  }
  image.setAttribute("src", fallback || webp || image.getAttribute("src") || "");
  image.setAttribute("alt", alt);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("hero-preview-open");
}

// 顶栏贴顶透明,滚起来才铺半透明底 + 磨砂 —— 和产品 AppHeader 同一套行为(components/app-header.tsx)。
// 透明是为了让页面顶部那片品牌辉光从窗口顶连贯下来;真铺一层实底,顶上就会裁出一条色带。
function syncHeaderScrolled() {
  document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("posthog:ready", flushPendingPostHogEvents);
window.addEventListener("scroll", syncHeaderScrolled, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.querySelector(".js-hero-preview-lightbox.is-open")) {
    closeHeroPreview();
  }
});

/** Everything that touches the page's own DOM. Runs on the first load and again after every
 *  client-side navigation (components/page-enhancer.js) — a page the router swapped in has never been
 *  seen by this script, and its `.reveal` sections stay invisible until something observes them. */
function initPage() {
  applyLinks(".js-download-link", linkConfig.download, "#download");
  applyLinks(".js-github-link", linkConfig.github, "#download");
  applyLinks(".js-x-link", linkConfig.x, "#download");
  applyLinks(".js-workbench-link", linkConfig.workbench, "https://app.forgent3d.com", { includeLocale: true });
  applyLinks(".js-try-link", linkConfig.try, "https://app.forgent3d.com", { includeLocale: true });
  applyLinks(".js-skills-repo-link", linkConfig.skillsRepo, "https://github.com/forgent3d/forgent3d-skills");

  // Install-command copy buttons (homepage skills section and /skills).
  document.querySelectorAll(".js-copy-command").forEach((node) => {
    if (!bindOnce(node, "Copy")) return;
    node.addEventListener("click", async () => {
      const value = node.getAttribute("data-copy-value") || "";
      const copiedLabel = node.getAttribute("data-copied-label");
      const idleLabel = node.getAttribute("data-copy-label") || node.textContent.trim();
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
      } catch {
        // Clipboard blocked (insecure context / denied) — the command stays selectable on screen.
        return;
      }

      trackEvent("copy_skills_command", { command: value });
      if (!copiedLabel) return;
      node.textContent = copiedLabel;
      window.setTimeout(() => {
        node.textContent = idleLabel;
      }, 1600);
    });
  });

  if (isHomepage()) {
    trackEvent("homepage_viewed", { referrer: document.referrer || undefined });
  }

  [
    [".js-try-link", "try_clicked"],
    [".js-pricing-link", "click_pricing"],
    [".js-skills-cta", "click_skills"],
    [".js-skills-repo-link", "click_skills_repo"],
    [".js-download-link", "click_download_desktop"],
    [".js-github-link", "click_github"],
    [".js-explore-link", "click_explore"],
  ].forEach(([selector, eventName]) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (!bindOnce(node, `Track${eventName}`)) return;
      node.addEventListener("click", () => {
        trackEvent(eventName, {
          href: node.getAttribute("href") || undefined,
          label: node.textContent.trim() || node.getAttribute("aria-label") || undefined,
        }, { transport: "sendBeacon" });
      });
    });
  });

  const isZh = window.location.pathname.startsWith("/zh");
  document.documentElement.lang = isZh ? "zh-CN" : "en";
  document.querySelectorAll(".js-lang-toggle").forEach((langToggle) => {
    langToggle.textContent = isZh ? "EN" : "中";
    langToggle.setAttribute("aria-label", isZh ? "Switch to English" : "切换到中文");
    if (!bindOnce(langToggle, "Lang")) return;
    langToggle.addEventListener("click", () => {
      // Same page in the other language: /zh/pricing ↔ /en/pricing.
      const path = window.location.pathname;
      const target = path.startsWith("/zh") ? "en" : "zh";
      window.location.pathname = /^\/(en|zh)(\/|$)/.test(path) ? path.replace(/^\/(en|zh)/, `/${target}`) : `/${target}`;
    });
  });

  document.querySelectorAll(".js-swap").forEach((node) => {
    const values = (node.dataset.values || "").split(",").filter(Boolean);
    if (values.length < 2 || !bindOnce(node, "Swap")) return;

    let index = 0;
    const timer = window.setInterval(() => {
      if (!node.isConnected) {
        window.clearInterval(timer);
        return;
      }
      index = (index + 1) % values.length;
      node.textContent = values[index];
    }, 1800);
  });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((node) => revealObserver.observe(node));

  document.querySelectorAll(".js-hero-preview-trigger").forEach((trigger) => {
    if (!bindOnce(trigger, "Preview")) return;
    trigger.addEventListener("click", () => {
      heroPreviewReturnFocus = trigger;
      openHeroPreview(trigger);
    });
  });
  document.querySelectorAll(".js-hero-preview-close").forEach((node) => {
    if (bindOnce(node, "PreviewClose")) node.addEventListener("click", closeHeroPreview);
  });

  syncHeaderScrolled();
}

window.forgentInitPage = initPage;
initPage();
