import assert from 'assert';
import accessSync from 'fs-access-sync-compat';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof accessSync, 'function');
  });
});
