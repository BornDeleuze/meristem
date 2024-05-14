import { module, test } from 'qunit';
import { setupTest } from 'shelton/tests/helpers';

module('Unit | Route | About', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:about');
    assert.ok(route);
  });
});
