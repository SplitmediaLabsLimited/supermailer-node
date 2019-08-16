const { argsValidation } = require('../../lib/helpers');

module.exports = function addEvent(name) {
  if (typeof name !== 'string' || name.length < 1) {
    throw new Error(
      `First parameter passed to ${parentFunctionName} has to be the name of the attribute an has to be of type string.`
    );
  }

  const date = new Date().toISOString();

  this.attributes[name] = date;

  return date;
};
