import { module, test } from 'qunit';
import { setupRenderingTest } from 'shelton/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer-section', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FooterSection />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FooterSection>
        template block text
      </FooterSection>
    `);

    assert.dom().hasText('template block text');
  });
});
