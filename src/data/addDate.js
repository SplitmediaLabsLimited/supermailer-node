const isParseableDate = dateString => !!Date.parse(dateString);

const isSlashFormat = dateString => dateString.includes('/');

module.exports = function addDate(name, value) {
  if (typeof name !== 'string' || name.length < 1 || typeof value !== 'string' || value.length < 1) {
    throw new Error(
      'Supermailer.data.addDate needs two parameters. First one is the name of the attribute (string) and the second one is a date string.'
    );
  }

  if (isSlashFormat(value)) {
    throw new Error("You can't pass a date string with slashes in it.");
  }

  if (!isParseableDate(value)) {
    throw new Error('You need to pass a valid date string as the second parameter to Supermailer.data.addDate.');
  }

  const date = new Date(Date.parse(value)).toISOString();

  this.attributes[name] = date;

  return date;
};
