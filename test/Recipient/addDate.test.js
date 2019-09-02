const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should set the proper attribute on the data object', () => {
  const r = new Recipient({});
  r.addDate('test', '2012-01-01');
  expect(r.data.test).toEqual('2012-01-01T00:00:00.000Z');
});

test(`Shouldn't throw with empty string value`, () => {
  const date = recipient.addDate('test', '');
  expect(date).toEqual(date);
});

test('Should accept a date object as value', () => {
  const date = recipient.addDate('test', new Date());
  expect(date.length).toEqual(24);
});

test('Should return 2018-12-23T00:00:00.000Z', () =>
  expect(recipient.addDate('test', '2018/12/23')).toEqual('2018-12-23T00:00:00.000Z'));

test('Should return 2018-12-23T00:00:00.000Z', () =>
  expect(recipient.addDate('test', '2018-12-23')).toEqual('2018-12-23T00:00:00.000Z'));

test('Should return 2018-12-23T00:00:00.000Z', () =>
  expect(recipient.addDate('test', '2018.12.23')).toEqual('2018-12-23T00:00:00.000Z'));

test('Should return null', () => expect(recipient.addDate('test', null)).toEqual(null));

test('Should return 2001-01-01T00:00:00.000Z', () =>
  expect(recipient.addDate('test', 1)).toEqual('2001-01-01T00:00:00.000Z'));
