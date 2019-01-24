import { module, skip /* test */ } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | callsign', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('callsign', {}));
    assert.ok(model);
  });
});
