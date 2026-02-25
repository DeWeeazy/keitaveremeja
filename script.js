// script.js
document.querySelectorAll("[data-href]").forEach((el) => {
  el.addEventListener("click", () => {
    const href = el.getAttribute("data-href");
    if (!href) return;

    document.body.classList.add("fade-out");

    // wait for fade-out animation then navigate
    setTimeout(() => {
      window.location.href = href;
    }, 220);
  });
});