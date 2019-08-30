const { argsValidation } = require('../lib/helpers');

module.exports = function addDate(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  if (value === '') value = new Date();

  this.attributes[name] = new Date(Date.parse(value)).toISOString();

  return this.attributes[name];
};
