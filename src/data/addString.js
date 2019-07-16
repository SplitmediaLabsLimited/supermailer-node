module.exports = function addString(name, value) {
  if (typeof name !== 'string' || name.length < 1 || typeof value !== 'string' || value.length < 1) {
    throw new Error(
      'Supermailer.data.addString needs two parameters. First one is the name (string) and second one is the value (string).'
    );
  }

  const string = value;

  this.attributes[name] = string;

  return string;
};
