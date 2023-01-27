var burgerMenu = document.querySelector(".header-burger-menu");
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("open");
});

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


