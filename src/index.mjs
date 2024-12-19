import fs from 'fs';

export default function existsAccessSync(fullPath) {
  if (fs.existsSync(fullPath)) return;

  const err = new Error(`ENOENT: no such file or directory, access '${fullPath}'`);
  err.code = 'ENOENT';
  err.errno = -2;
  throw err;
}
