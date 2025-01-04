import fs from 'fs';

function accessError(fullPath) {
  const err = new Error(`ENOENT: no such file or directory, access '${fullPath}'`) as NodeJS.ErrnoException;
  err.code = 'ENOENT';
  err.errno = -2;
  return err;
}

export default function existsAccessSync(fullPath: string): NodeJS.ErrnoException | null {
  try {
    fs.statSync(fullPath);
    return null;
  } catch (_err) {
    throw accessError(fullPath);
  }
}
