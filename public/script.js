const linkConfig = window.FORGENT_LINKS || {};

function applyLinks(selector, value, fallback) {
  const href = value && !value.includes("your-") ? value : fallback;
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute("href", href);
    node.setAttribute("target", href.startsWith("http") ? "_blank" : "_self");
    node.setAttribute("rel", href.startsWith("http") ? "noreferrer" : "");
  });
}

applyLinks(".js-download-link", linkConfig.download, "#download");
applyLinks(".js-github-link", linkConfig.github, "#download");

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

document.querySelectorAll(".js-screenshot-carousel").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll(".screenshot-slide"));
  const dots = Array.from(carousel.querySelectorAll(".js-screenshot-dot"));
  const indexNode = carousel.querySelector(".js-screenshot-index");
  const titleNode = carousel.querySelector(".js-screenshot-title");
  const descNode = carousel.querySelector(".js-screenshot-desc");

  if (slides.length < 2) {
    return;
  }

  let activeIndex = 0;

  function setActiveSlide(nextIndex) {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
    dots.forEach((dot, index) => {
      dot.classList.toggle("w-8", index === activeIndex);
      dot.classList.toggle("w-3", index !== activeIndex);
      dot.classList.toggle("bg-cyanx", index === activeIndex);
      dot.classList.toggle("bg-slate-600", index !== activeIndex);
      dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });

    const activeSlide = slides[activeIndex];
    if (indexNode) indexNode.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    if (titleNode) titleNode.textContent = activeSlide.dataset.title || "";
    if (descNode) descNode.textContent = activeSlide.dataset.desc || "";
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => setActiveSlide(index));
  });

  setActiveSlide(0);
  window.setInterval(() => setActiveSlide(activeIndex + 1), 4200);
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

const heroPreviewTrigger = document.querySelector(".js-hero-preview-trigger");
const heroPreviewLightbox = document.querySelector(".js-hero-preview-lightbox");
const heroPreviewImage = document.querySelector(".js-hero-preview-image");
const heroPreviewCloseNodes = document.querySelectorAll(".js-hero-preview-close");

if (heroPreviewTrigger && heroPreviewLightbox && heroPreviewImage) {
  function closeHeroPreview() {
    heroPreviewLightbox.classList.remove("is-open");
    heroPreviewLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("hero-preview-open");
    heroPreviewTrigger.focus();
  }

  heroPreviewTrigger.addEventListener("click", () => {
    const src = heroPreviewTrigger.dataset.previewSrc || heroPreviewImage.getAttribute("src") || "";
    const alt = heroPreviewTrigger.dataset.previewAlt || heroPreviewImage.getAttribute("alt") || "Preview image";
    heroPreviewImage.setAttribute("src", src);
    heroPreviewImage.setAttribute("alt", alt);
    heroPreviewLightbox.classList.add("is-open");
    heroPreviewLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("hero-preview-open");
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
