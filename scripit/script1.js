var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 65,
    centeredSlides: false,
    centerSlide: true,
    fade: true,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

// let count = 1;

// document.querySelector("card swiper-slide").checked = true;

// setInterval(function(){
//     nextImage();
// }, 2000)

// function nextImage(){
//     count++;
//     if(count>5){
//         count = 1;
//     }

//     document.querySelector("card swiper-slide" + count).checked = true;

// }