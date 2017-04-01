import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('balance-compnonent', 'Integration | Component | balance compnonent', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{balance-compnonent}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#balance-compnonent}}
      template block text
    {{/balance-compnonent}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
