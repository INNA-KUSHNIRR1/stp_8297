import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
  function initSwiper() {
    return new Swiper('.reviews-swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 12,
      centeredSlides: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
  }

  let swiperInstance; // Для хранения экземпляра Swiper

  function checkScreenSize() {
    const isMobile = window.innerWidth < 1199;
    const swiperContainer = document.querySelector('.reviews-swiper');

    if (isMobile) {
      if (!swiperInstance) {
        swiperContainer.classList.add('swiper');
        document.querySelector('.reviews-list').classList.add('swiper-wrapper');
        document.querySelectorAll('.reviews-item').forEach(slide => {
          slide.classList.add('swiper-slide');
        });

        swiperInstance = initSwiper();
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }

      swiperContainer?.classList.remove('swiper');
      document
        .querySelector('.reviews-list')
        ?.classList.remove('swiper-wrapper');
      document.querySelectorAll('.reviews-item').forEach(slide => {
        slide.classList.remove('swiper-slide');
      });
    }
  }

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
