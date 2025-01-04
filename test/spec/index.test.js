const assert = require('assert');

const accessSync = require('fs-access-sync-compat');

describe('fs-access-sync-compat', () => {
  it('exists', (done) => {
    assert.doesNotThrow(() => {
      accessSync(__filename);
    });
    done();
  });

  it('does not exist', (done) => {
    try {
      accessSync(`${__filename}junk`);
      assert.ok(false);
    } catch (err) {
      assert.equal(err.message.indexOf('ENOENT'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.equal(err.errno, -2);
      done();
    }
  });
});
