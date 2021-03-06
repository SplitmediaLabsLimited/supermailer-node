const { argsValidation } = require('../lib/helpers');

module.exports = function addNumber(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.data[name] = null);

  const number = Number(value);

  if (isNaN(number)) {
    throw new Error('The second parameter is a string that cannot be converted into a number.');
  }

  this.data[name] = number;

  return this.data[name];
};
