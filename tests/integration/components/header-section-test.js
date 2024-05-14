import { module, test } from 'qunit';
import { setupRenderingTest } from 'shelton/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header-section', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HeaderSection />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <HeaderSection>
        template block text
      </HeaderSection>
    `);

    assert.dom().hasText('template block text');
  });
});
