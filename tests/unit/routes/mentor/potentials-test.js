import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mentor/potentials', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mentor/potentials');
    assert.ok(route);
  });
});
