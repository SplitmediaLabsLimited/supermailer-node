const { argsValidation } = require('../../lib/helpers');

module.exports = function addDate(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  if (value === '') value = new Date();

  const date = new Date(Date.parse(value)).toISOString();

  this.attributes[name] = date;

  return date;
};
