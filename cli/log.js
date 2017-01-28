const map = require('map-stream');

module.exports = map(function(file, cb) {
  const filename = file.path.substr(file.base.length);
  console.log(`    Copy : ${filename} `);
  cb(null, file);
});