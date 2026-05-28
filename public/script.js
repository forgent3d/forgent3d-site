const linkConfig = window.FORGENT_LINKS || {};

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

applyLinks(".js-download-link", linkConfig.download, "#download");
applyLinks(".js-github-link", linkConfig.github, "#download");
applyLinks(".js-x-link", linkConfig.x, "#download");
applyLinks(".js-workbench-link", linkConfig.workbench, "https://app.forgent3d.com", { includeLocale: true });
applyLinks(".js-try-link", linkConfig.try, "#download", { includeLocale: true });

const langToggle = document.querySelector(".js-lang-toggle");
if (langToggle) {
  const isZh = window.location.pathname.startsWith("/zh");
  document.documentElement.lang = isZh ? "zh-CN" : "en";
  langToggle.textContent = isZh ? "EN" : "中";
  langToggle.setAttribute("aria-label", isZh ? "Switch to English" : "切换到中文");
  langToggle.addEventListener("click", () => {
    window.location.pathname = isZh ? "/en" : "/zh";
  });
}

const swapNodes = document.querySelectorAll(".js-swap");
swapNodes.forEach((node) => {
  const values = (node.dataset.values || "").split(",").filter(Boolean);
  if (values.length < 2) {
    return;
  }

  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % values.length;
    node.textContent = values[index];
  }, 1800);
});

const revealNodes = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealNodes.forEach((node) => observer.observe(node));

const heroPreviewTriggers = document.querySelectorAll(".js-hero-preview-trigger");
const heroPreviewLightbox = document.querySelector(".js-hero-preview-lightbox");
const heroPreviewSource = document.querySelector(".js-hero-preview-source");
const heroPreviewImage = document.querySelector(".js-hero-preview-image");
const heroPreviewCloseNodes = document.querySelectorAll(".js-hero-preview-close");

let heroPreviewReturnFocus = null;

if (heroPreviewTriggers.length && heroPreviewLightbox && heroPreviewImage) {
  function openHeroPreview(trigger) {
    const webp = trigger.dataset.previewSrc || "";
    const fallback = trigger.dataset.previewFallback || "";
    const alt = trigger.dataset.previewAlt || "Preview image";
    if (heroPreviewSource) {
      if (webp) {
        heroPreviewSource.setAttribute("srcset", webp);
      } else {
        heroPreviewSource.removeAttribute("srcset");
      }
    }
    heroPreviewImage.setAttribute("src", fallback || webp || heroPreviewImage.getAttribute("src") || "");
    heroPreviewImage.setAttribute("alt", alt);
    heroPreviewLightbox.classList.add("is-open");
    heroPreviewLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("hero-preview-open");
  }

  function closeHeroPreview() {
    heroPreviewLightbox.classList.remove("is-open");
    heroPreviewLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("hero-preview-open");
    if (heroPreviewReturnFocus) {
      heroPreviewReturnFocus.focus();
      heroPreviewReturnFocus = null;
    }
  }

  heroPreviewTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      heroPreviewReturnFocus = trigger;
      openHeroPreview(trigger);
    });
  });

  heroPreviewCloseNodes.forEach((node) => {
    node.addEventListener("click", closeHeroPreview);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && heroPreviewLightbox.classList.contains("is-open")) {
      closeHeroPreview();
    }
  });
}
