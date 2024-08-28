import { module, test } from 'qunit';
import { setupRenderingTest } from 'shelton/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hamburger', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Hamburger />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Hamburger>
        template block text
      </Hamburger>
    `);

    assert.dom().hasText('template block text');
  });
});
