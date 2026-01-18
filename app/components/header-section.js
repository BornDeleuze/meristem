import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked expandHamburger = false;

  @action
  toggleHamburger() {
    this.expandHamburger = !this.expandHamburger;
  }
  @action
  hideHamburger() {
    this.expandHamburger = false;
  }
  @action
  handleKeydown(event) {
    if (event.key === 'Escape' && this.expandHamburger) {
      this.hideHamburger();
    }
  }
  @action
  setupScrollListener(element) {
    const header = element;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }
}
