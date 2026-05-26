import assert from 'assert';
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
      const e = err as NodeJS.ErrnoException;
      assert.equal(e.message.indexOf('ENOENT'), 0);
      assert.equal(e.code, 'ENOENT');
      assert.equal(e.errno, -2);
      done();
    }
  });
});
