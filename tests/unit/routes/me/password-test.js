import { module, skip /* test */ } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | person/password', function(hooks) {
  setupTest(hooks);

  skip('it exists', function(assert) {
    let route = this.owner.lookup('route:me/password');
    assert.ok(route);
  });
});
