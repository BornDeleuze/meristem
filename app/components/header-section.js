import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked expandHamburger = false;

  @action
  toggleHamburger() {
    this.expandHamburger = !this.expandHamburger;
    console.log('welp');
  }
  @action
  hideHamburger() {
    this.expandHamburger = false;
    console.log('welo');
  }
}
