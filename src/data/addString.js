const { argsValidation } = require('../lib/helpers');

module.exports = function addString(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  this.attributes[name] = String(value);

  return this.attributes[name];
};
