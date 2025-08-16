// Optional animation on scroll
document.addEventListener("scroll", () => {
  const features = document.querySelectorAll(".feature");
  features.forEach((feature) => {
    const rect = feature.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      feature.style.opacity = 1;
      feature.style.transform = "translateY(0)";
    }
  });
});
