var assert = require('assert');

var accessSync = require('../..');

describe('fs-access-sync-compat', function () {
  it('exists', function (done) {
    assert.doesNotThrow(function () {
      accessSync(__filename);
    });
    done();
  });

  it('does not exist', function (done) {
    try {
      // eslint-disable-next-line no-path-concat
      accessSync(__filename + 'junk');
      assert.ok(false);
    } catch (err) {
      assert.equal(err.message.indexOf('ENOENT'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.equal(err.errno, -2);
      done();
    }
  });
});
