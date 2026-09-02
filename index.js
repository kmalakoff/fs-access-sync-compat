var fs = require('fs');
var errno = require('errno');

function existsAccessSync(fullPath) {
  // eslint-disable-next-line node/no-deprecated-api
  if (fs.existsSync(fullPath)) return;

  var err = new Error("ENOENT: no such file or directory, access '" + fullPath + "'");
  err.code = 'ENOENT';
  err.errno = errno.code.ENOENT;
  throw err;
}

module.exports = fs.accessSync || existsAccessSync;
