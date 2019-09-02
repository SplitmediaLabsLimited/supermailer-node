const { argsValidation } = require('../lib/helpers');

module.exports = function addString(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.data[name] = null);

  this.data[name] = String(value);

  return this.data[name];
};
