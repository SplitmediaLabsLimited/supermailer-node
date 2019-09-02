const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should set the proper attribute on the data object', () => {
  const r = new Recipient({});
  r.addBoolean('test', false);
  expect(r.data.test).toEqual(false);
});

test('Should return null', () => expect(recipient.addBoolean('test', null)).toEqual(null));

test('Should return false', () => expect(recipient.addBoolean('test', '')).toEqual(false));

test('Should return true', () => expect(recipient.addBoolean('test', 1)).toEqual(true));

test('Should return true', () => expect(recipient.addBoolean('test', '1')).toEqual(true));

test('Should return false', () => expect(recipient.addBoolean('test', 0)).toEqual(false));

test('Should return false', () => expect(recipient.addBoolean('test', '0')).toEqual(false));

test('Should return false', () => expect(recipient.addBoolean('test', 3)).toEqual(false));

test('Should return false', () => expect(recipient.addBoolean('test', '3')).toEqual(false));

test('Should return true', () => expect(recipient.addBoolean('test', 'true')).toEqual(true));

test('Should return false', () => expect(recipient.addBoolean('test', 'false')).toEqual(false));
