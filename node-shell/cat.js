const fs = require('fs');

module.exports = function (file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data.toString());
      process.stdout.write('What do you need else ?: ');
    }
  });
};
