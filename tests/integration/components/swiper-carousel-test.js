import { module, test } from 'qunit';
import { setupRenderingTest } from 'shelton/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | swiper-carousel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SwiperCarousel />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SwiperCarousel>
        template block text
      </SwiperCarousel>
    `);

    assert.dom().hasText('template block text');
  });
});
