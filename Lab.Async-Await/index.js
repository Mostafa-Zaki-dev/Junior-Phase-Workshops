const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord]) mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  const poem1 = await readFileAsync('poems/you.txt', 'utf-8');
  let frequentWord = mostFrequentWord(poem1);
  console.log(frequentWord);
};

findPassword();
