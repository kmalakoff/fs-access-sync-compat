import assert from 'assert';
// @ts-ignore
import accessSync from 'fs-access-sync-compat';
import url from 'url';

const ___fileanme = typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url);

describe('fs-access-sync-compat', () => {
  it('exists', (done) => {
    assert.doesNotThrow(() => {
      accessSync(___fileanme);
    });
    done();
  });

  it('does not exist', (done) => {
    try {
      accessSync(`${___fileanme}junk`);
      assert.ok(false);
    } catch (err) {
      assert.equal(err.message.indexOf('ENOENT'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.equal(err.errno, -2);
      done();
    }
  });
});
