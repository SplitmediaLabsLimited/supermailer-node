module.exports = function addBoolean(name, value) {
  if (typeof name !== 'string' || name.length < 1 || typeof value !== 'boolean') {
    throw new Error(
      'Supermailer.data.addBoolean needs two parameters. First one is the name (string) and second one is the value (boolean).'
    );
  }

  const bool = value;

  this.attributes[name] = bool;

  return bool;
};
