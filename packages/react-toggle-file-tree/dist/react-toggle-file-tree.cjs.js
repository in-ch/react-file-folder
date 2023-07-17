'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-toggle-file-tree.cjs.prod.js");
} else {
  module.exports = require("./react-toggle-file-tree.cjs.dev.js");
}
