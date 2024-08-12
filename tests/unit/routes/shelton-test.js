import { module, test } from 'qunit';
import { setupTest } from 'shelton/tests/helpers';

module('Unit | Route | Shelton', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:shelton');
    assert.ok(route);
  });
});
