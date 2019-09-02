const { argsValidation } = require('../lib/helpers');

module.exports = function addEvent(name, value) {
  argsValidation.call(arguments);

  if (value === null) return (this.data[name] = null);

  this.data[name] = new Date().toISOString();

  return this.data[name];
};
