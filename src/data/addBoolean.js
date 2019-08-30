const { argsValidation } = require('../lib/helpers');

module.exports = function addBoolean(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  this.attributes[name] = String(value) === '1' || String(value) === 'true';

  return this.attributes[name];
};
