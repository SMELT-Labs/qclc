var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });