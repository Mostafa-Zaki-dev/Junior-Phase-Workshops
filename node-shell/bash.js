const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('What do you need ?: ');
process.stdin.on('data', data => {
  if (data.toString().trim() === 'pwd') {
    pwd();
  } else if (data.toString().trim() === 'ls') {
    ls();
  } else if (data.toString().trim().split(' ').includes('cat')) {
    cat(`./${data.toString().trim().split(' ')[1]}`);
  } else {
    console.log('your needs are: ' + data.toString().trim());
    process.stdout.write('What do you need else?: ');
  }
});
