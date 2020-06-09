const createRandomWord = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = { createRandomWord };
