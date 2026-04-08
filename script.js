function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".job").forEach(job => {
    const top = job.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      job.classList.add("show");
    }
  });
});