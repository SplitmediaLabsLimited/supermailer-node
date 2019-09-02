const { argsValidation } = require('../lib/helpers');

module.exports = function addDate(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.data[name] = null);

  if (value === '') value = new Date();

  this.data[name] = new Date(Date.parse(value)).toISOString();

  return this.data[name];
};
