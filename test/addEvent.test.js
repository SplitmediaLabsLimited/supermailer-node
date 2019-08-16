const Recipient = require('../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should set the proper attribute on the date object', () => {
  const r = new Recipient({}); // Don't need to init with object values for unit tests
  recipient.data.addEvent('test');
  expect(typeof r.attributes.test).not.toBeUndefined();
});

test('Should set a proper date', () => {
  const date = new Date().toISOString().slice(0, 16);
  const setDate = recipient.data.addEvent('test').slice(0, 16);
  expect(date).toEqual(setDate);
});

test('Should set UTC string date of length 24', () => {
  recipient.data.addEvent('test');
  expect(recipient.attributes.test.length).toEqual(24);
});

test('Should throw when passing number as first argument', () =>
  expect(() => {
    recipient.data.addEvent(1, 1);
  }).toThrow());

test('Should throw when passing no argument', () =>
  expect(() => {
    recipient.data.addEvent();
  }).toThrow());
