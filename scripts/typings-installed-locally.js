var fs = require('fs');
var path = require('path');
try {
  fs.statSync(path.join(__dirname, '../node_modules/.bin/typings' + (process.platform === 'win32' ? '.cmd' : '')));
} catch(e) {
  process.exit(1);
}
