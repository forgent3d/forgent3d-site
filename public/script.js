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
