import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.gallery-swiper', {
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 6,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    observer: true,
    observeParents: true,
  });
});
