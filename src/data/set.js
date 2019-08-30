const { argsValidation } = require('../lib/helpers');

module.exports = function set(obj = {}) {
  Object.entries(obj).forEach(([name, value]) => {
    const type = typeof value;

    if (type === 'string') return this.data.addString(name, value);

    if (type === 'number') return this.data.addNumber(name, value);

    if (type === 'boolean') return this.data.addBoolean(name, value);

    if (type === 'object') {
      if (value instanceof Date) {
        return this.data.addDate(name, value);
      }
    }
  });

  return obj;
};
