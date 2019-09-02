const { argsValidation } = require('../lib/helpers');

module.exports = function addBoolean(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.data[name] = null);

  this.data[name] = String(value) === '1' || String(value) === 'true';

  return this.data[name];
};
