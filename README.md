# fs-access-sync-compat

An `fs.accessSync` ponyfill for older versions of Node.js. It returns `null`
when the path exists and throws an `ENOENT` error when it does not. It uses
`fs.statSync`, does not accept a mode argument, and does not check permissions
like the native `fs.accessSync` API.

```sh
npm install fs-access-sync-compat
```

In a CommonJS `.cjs` file:

```js
const accessSync = require('fs-access-sync-compat');

accessSync('/path/to/file');
console.log('The path exists');
```

For the native API's full signature, see
https://nodejs.org/api/fs.html#fs_fs_accesssync_path_mode.
