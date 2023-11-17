import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {
  @action
  onClick() {
    console.log('button clicked');
    return this.args.onClick?.(...arguments);
  }
}
