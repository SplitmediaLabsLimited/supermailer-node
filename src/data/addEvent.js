module.exports = function addEvent(name) {
  if (typeof name !== 'string' || name.length < 1) {
    throw new Error('Supermailer.data.addEvent needs a single parameter which is the event name (string).');
  }

  const date = new Date().toISOString();

  this.attributes[name] = date;

  return date;
};
