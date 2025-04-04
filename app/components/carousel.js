// app/components/image-carousel.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';  // Make sure this import is present

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
    return this.isWideScreen
      ? this.args.images.slice(this.currentIndex, this.currentIndex + 3)
      : [this.args.images[this.currentIndex]];
  }

  @action next() {
    if (this.isWideScreen) {
      this.currentIndex = (this.currentIndex + 3) % this.totalSlides;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    }
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