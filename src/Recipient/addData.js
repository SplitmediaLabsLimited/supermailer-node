const { argsValidation } = require('../lib/helpers');

module.exports = function addData(obj = {}) {
  Object.entries(obj).forEach(([name, value]) => {
    const type = typeof value;

    if (type === 'string') return this.addString(name, value);

    if (type === 'number') return this.addNumber(name, value);

    if (type === 'boolean') return this.addBoolean(name, value);

    if (type === 'object') {
      if (value instanceof Date) {
        return this.addDate(name, value);
      }
    }
  });

  return obj;
};
