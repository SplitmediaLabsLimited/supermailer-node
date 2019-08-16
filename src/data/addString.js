const { argsValidation } = require('../../lib/helpers');

module.exports = function addString(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  const string = String(value);

  this.attributes[name] = string;

  return string;
};
