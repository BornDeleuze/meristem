// app/components/image-carousel.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ImageCarouselComponent extends Component {
  @tracked currentIndex = 0;

  get totalSlides() {
    return this.args.images.length;
  }

  get currentImage() {
    return this.args.images[this.currentIndex];
  }

  @action next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  @action prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }
}