$(function () {
  console.log('Hello Bootstrap5');
});
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: true,
});
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    rows: 3,
    fill: 'row',
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  },

});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// console.log(document.body.clientWidth)
const getElemt = (elemt) => document.querySelector(elemt);
if (getElemt('.js-firstbtn')) {
  // js-first js-firstbtn js-first-icon
  getElemt('.js-firstbtn').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-first').classList.toggle('border-primary');
    getElemt('.js-first').classList.toggle('border-4');
    getElemt('.js-first-icon').classList.toggle('d-block');
    getElemt('.js-text').textContent = '首次體驗課程-'
    clear(1);
    none(1)
  })
  // js-short js-shortbtn js-short-icon
  getElemt('.js-shortbtn').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-short').classList.toggle('border-primary');
    getElemt('.js-short').classList.toggle('border-4');
    getElemt('.js-short-icon').classList.toggle('d-block');
    getElemt('.js-text').textContent = '短期體驗課程-'
    clear(2)
    none(2)
  })
  // js-long js-longbtn js-long-icon
  getElemt('.js-longbtn').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-long').classList.toggle('border-primary');
    getElemt('.js-long').classList.toggle('border-4');
    getElemt('.js-long-icon').classList.toggle('d-block');
    getElemt('.js-text').textContent = '長期體驗課程-'
    clear(3)
    none(3)
  })
  // js-levle1~3 
  getElemt('.js-level1').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-span').textContent = '基礎'
  })
  getElemt('.js-level2').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-span').textContent = '中階'
  })
  getElemt('.js-level3').addEventListener('click', (e) => {
    e.preventDefault();
    getElemt('.js-span').textContent = '高階'
  })
  render();
}
function clear(dom) {
  if (dom === 1) {
    getElemt('.js-long').classList.remove('border-primary', 'border-4');
    getElemt('.js-long-icon').classList.remove('d-block');
    getElemt('.js-short').classList.remove('border-primary', 'border-4');
    getElemt('.js-short-icon').classList.remove('d-block');
  } else if (dom === 2) {
    getElemt('.js-first').classList.remove('border-primary', 'border-4');
    getElemt('.js-first-icon').classList.remove('d-block');
    getElemt('.js-long').classList.remove('border-primary', 'border-4');
    getElemt('.js-long-icon').classList.remove('d-block');
  } else if (dom === 3) {
    getElemt('.js-first').classList.remove('border-primary', 'border-4');
    getElemt('.js-first-icon').classList.remove('d-block');
    getElemt('.js-short').classList.remove('border-primary', 'border-4');
    getElemt('.js-short-icon').classList.remove('d-block');
  }

}
function none(dom) {
  if (dom === 1) {
    getElemt('.js-first').classList.remove('d-none', 'd-lg-block');
    getElemt('.js-long').classList.add('d-none', 'd-lg-block');
    getElemt('.js-short').classList.add('d-none', 'd-lg-block');
  } else if (dom === 2) {
    getElemt('.js-short').classList.remove('d-none', 'd-lg-block');
    getElemt('.js-first').classList.add('d-none', 'd-lg-block');
    getElemt('.js-long').classList.add('d-none', 'd-lg-block');
  } else if (dom === 3) {
    getElemt('.js-long').classList.remove('d-none', 'd-lg-block');
    getElemt('.js-first').classList.add('d-none', 'd-lg-block');
    getElemt('.js-short').classList.add('d-none', 'd-lg-block');
  }

}
function render() {
  getElemt('.js-first').classList.toggle('border-primary');
  getElemt('.js-first').classList.toggle('border-4');
  getElemt('.js-first-icon').classList.toggle('d-block');
  getElemt('.js-text').textContent = '首次體驗課程-';
  getElemt('.js-span').textContent = '基礎'
  clear(1);
  none(1)
}
