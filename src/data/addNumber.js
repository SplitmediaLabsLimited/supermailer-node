module.exports = function addInteger(name, value) {
  if (typeof name !== 'string' || name.length < 1 || typeof value !== 'number' || value.length < 1) {
    throw new Error(
      'Supermailer.data.addInteger needs two parameters. First one is the name (string) and second one is the value (number).'
    );
  }

  const number = value;

  this.attributes[name] = number;

  return number;
};
