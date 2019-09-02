const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should accept null as a value', () => expect(recipient.addEvent('test', null)).toEqual(null));

test('Should set the proper attribute on the date object', () => {
  const r = new Recipient({}); // Don't need to init with object values for unit tests
  recipient.addEvent('test');
  expect(typeof r.data.test).not.toBeUndefined();
});

test('Should set a proper date', () => {
  const date = new Date().toISOString().slice(0, 16);
  const setDate = recipient.addEvent('test').slice(0, 16);
  expect(date).toEqual(setDate);
});

test('Should set UTC string date of length 24', () => {
  recipient.addEvent('test');
  expect(recipient.data.test.length).toEqual(24);
});

test('Should throw when passing number as first argument', () =>
  expect(() => {
    recipient.addEvent(1, 1);
  }).toThrow());

test('Should throw when passing no argument', () =>
  expect(() => {
    recipient.addEvent();
  }).toThrow());
