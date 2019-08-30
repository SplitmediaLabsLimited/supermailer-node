const { argsValidation } = require('../lib/helpers');

module.exports = function addEvent(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.attributes[name] = null);

  this.attributes[name] = new Date().toISOString();

  return this.attributes[name];
};
