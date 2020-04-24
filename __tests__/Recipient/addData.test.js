const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should accept an empty object', () => {
  const r = new Recipient({});
  r.addData({});
  expect(Object.keys(r.data)).toMatchObject([]);
});

test('Should set the right attributes and infer the type correctly on the recipient attributes', () => {
  const r = new Recipient({});

  r.addData({
    boolean: false,
    date: new Date(),
    number: 1,
    string: 'string',
    removeAttribute: null,
  });

  expect(typeof r.data.number).toEqual('number');
  expect(r.data.number).toEqual(1);

  expect(typeof r.data.date).toEqual('string');
  expect(r.data.date.length).toEqual(24); // ISO date string format

  expect(typeof r.data.string).toEqual('string');
  expect(r.data.string).toEqual('string');

  expect(typeof r.data.boolean).toEqual('boolean');
  expect(r.data.boolean).toEqual(false);

  expect(r.data.removeAttribute).toEqual(null);
});

test("Shouldn't overwrite the attributes object when using set after adding data with other methods", () => {
  const r = new Recipient({});

  r.addString('test', '123');
  r.addData({
    boolean: false,
    date: new Date(),
    number: 1,
    string: 'string',
    removeAttribute: null,
  });

  expect(r.data.boolean).toEqual(false);
  expect(r.data.date.length).toEqual(24);
  expect(r.data.number).toEqual(1);
  expect(r.data.string).toEqual('string');
  expect(r.data.removeAttribute).toEqual(null);
  expect(r.data.test).toEqual('123');
});
