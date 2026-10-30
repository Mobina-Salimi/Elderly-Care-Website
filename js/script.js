

// header-swiper
const swiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1400,

    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

  

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});

// section1
  
      var swiperOne = new Swiper('.mySwiper', {
        slidesPerView: 5,
        spaceBetween: 30,
      
          pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
      breakpoints: {

    320: {
      slidesPerView: 2,
      spaceBetween: 17
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 15
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 25
    }
  }
      });
 document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; 

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

    
      const inc = target / speed;

      if (count < target) {
        
        counter.innerText = Math.ceil(count + inc);
     
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
