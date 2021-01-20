const fs = require('fs');
module.exports = function () {
  fs.readdir('./', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('What do you need ?: ');
    }
  });
};
