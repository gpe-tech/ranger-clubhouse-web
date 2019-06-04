import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember/object';
import { tagName } from '@ember-decorators/component';

/*
 * Component helper - loop through a block N number of times.
 */

@tagName('')
export default class NumberOfTimesComponent extends Component {
  @argument('number') times;

  @computed('times')
  get loops() {
    const iterations = [], times = +this.get('times');
    for (let i = 0; i < times; i++) {
      iterations.push(i);
    }

    return iterations;
  }
}
