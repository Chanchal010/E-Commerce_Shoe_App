const wrapper = document.querySelector(".sliderWrapper");

const menuButtons = document.querySelectorAll(".menuItem");

menuButtons.forEach((opt, index) => {
  opt.addEventListener("click", () => {
    wrapper.style.transform = `translatex(${-100 * index}vw)`;
  });
});