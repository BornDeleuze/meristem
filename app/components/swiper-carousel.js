import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default class SwiperCarouselComponent extends Component {
  @tracked swiperInstance;

  @action
  setupSwiper(element) {
    console.log("helllooooo!!")
    // Add a small delay or wait for next render tick
    requestAnimationFrame(() => {
      const swiperEl = element.querySelector('.swiper');

      if (!swiperEl) {
        console.error('Swiper root element not found');
        return;
      }

      this.swiperInstance = new Swiper(swiperEl, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: swiperEl.querySelector('.swiper-pagination'),
          clickable: true,
        },
        navigation: {
          nextEl: swiperEl.querySelector('.swiper-button-next'),
          prevEl: swiperEl.querySelector('.swiper-button-prev'),
        },
      });
    });
  }
}
