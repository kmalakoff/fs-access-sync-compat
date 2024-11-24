"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return existsAccessSync;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function existsAccessSync(fullPath) {
    if (_fs.default.existsSync(fullPath)) return;
    var err = new Error("ENOENT: no such file or directory, access '".concat(fullPath, "'"));
    err.code = 'ENOENT';
    err.errno = -2;
    throw err;
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }