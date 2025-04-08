// app/components/image-carousel.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
export default class ImageCarouselComponent extends Component {
  @tracked currentIndex = 0;
  @tracked isWideScreen = window.innerWidth > 800;

  // Resize listener to detect screen width change
  resizeListener = () => {
    this.isWideScreen = window.innerWidth > 800;
  };

  // Modifier to attach resize listener
  resizeModifier = modifier((element) => {
    window.addEventListener('resize', this.resizeListener);
    return () => window.removeEventListener('resize', this.resizeListener);
  });

  get totalSlides() {
    return this.args.images.length;
  }

  get visibleImages() {
    const images = this.args.images;
    const total = images.length;

    if (this.isWideScreen) {
      const leftIndex = (this.currentIndex - 1 + total) % total;
      const centerIndex = this.currentIndex;
      const rightIndex = (this.currentIndex + 1) % total;

      return [
        images[leftIndex],
        images[centerIndex],
        images[rightIndex],
      ];
    } else {
      return [images[this.currentIndex]];
    }
  }

  get centerVisibleIndex() {
    return this.isWideScreen ? this.currentIndex + 1 : this.currentIndex;
  }

  @action next() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  @action prev() {
    if (this.isWideScreen) {
      this.currentIndex = (this.currentIndex - 3 + this.totalSlides) % this.totalSlides;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    }
  }

  @action selectImage(index) {
    this.currentIndex = index;
  }

  @action handleSwipe(event) {
    if (event.deltaX > 0) {
      this.prev();
    } else {
      this.next();
    }
  }
}