document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".section-1").classList.toggle("change");
  });