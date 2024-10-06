import { module, test } from 'qunit';
import { setupTest } from 'meristem/tests/helpers';

module('Unit | Route | meristem', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:meristem');
    assert.ok(route);
  });
});
