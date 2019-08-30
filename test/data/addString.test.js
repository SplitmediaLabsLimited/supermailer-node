const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should set the proper attribute on the data object', () => {
  const r = new Recipient({});
  r.data.addString('test', 'a b c d');
  expect(r.attributes.test).toEqual('a b c d');
});

test('Should accept empty string', () => expect(recipient.data.addString('test', '')).toEqual(''));

test('Should accept null as a value', () => expect(recipient.data.addString('test', null)).toEqual(null));

test('Should typecast positive number to string', () => expect(recipient.data.addString('test', 1234)).toEqual('1234'));

test('Should typecast negative number to string', () => expect(recipient.data.addString('test', -1)).toEqual('-1'));
