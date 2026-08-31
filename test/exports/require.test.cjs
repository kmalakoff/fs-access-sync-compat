const assert = require('assert');
const accessSync = require('fs-access-sync-compat');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof accessSync, 'function');
  });
});
