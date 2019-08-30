const Recipient = require('../../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should accept an empty object', () => {
  const r = new Recipient({});
  r.data.set({});
  expect(Object.keys(r.attributes)).toMatchObject([]);
});

test('Should set the right attributes and infer the type correctly on the recipient attributes', () => {
  const r = new Recipient({});

  r.data.set({
    boolean: false,
    date: new Date(),
    number: 1,
    string: 'string',
  });

  expect(typeof r.attributes.number).toEqual('number');
  expect(r.attributes.number).toEqual(1);

  expect(typeof r.attributes.date).toEqual('string');
  expect(r.attributes.date.length).toEqual(24); // ISO date string format

  expect(typeof r.attributes.string).toEqual('string');
  expect(r.attributes.string).toEqual('string');

  expect(typeof r.attributes.boolean).toEqual('boolean');
  expect(r.attributes.boolean).toEqual(false);
});

test("Shouldn't overwrite the attributes object when using set after adding data with other methods", () => {
  const r = new Recipient({});

  r.data.addString('test', '123');
  r.data.set({
    boolean: false,
    date: new Date(),
    number: 1,
    string: 'string',
  });

  expect(r.attributes.boolean).toEqual(false);
  expect(r.attributes.date.length).toEqual(24);
  expect(r.attributes.number).toEqual(1);
  expect(r.attributes.string).toEqual('string');
  expect(r.attributes.test).toEqual('123');
});
