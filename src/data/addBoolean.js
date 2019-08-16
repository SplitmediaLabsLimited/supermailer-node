const { argsValidation } = require('../../lib/helpers');

module.exports = function addBoolean(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  const bool = String(value) === '1' || String(value) === 'true';

  this.attributes[name] = bool;

  return bool;
};
