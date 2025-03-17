import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

if (window.innerWidth <= 767) {
  var swiper = new Swiper('.mySwiperr', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    centeredSlides: true,
    pagination: {
      el: '.reviews-swiper-pagination',
      clickable: true,
    },
  });
}
