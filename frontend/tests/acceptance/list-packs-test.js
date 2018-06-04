import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list packs', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-packs', async function(assert) {
    await visit('/list-packs');

    assert.equal(currentURL(), '/list-packs');
  });
});
