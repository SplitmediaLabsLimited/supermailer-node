const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');

it(`Passes when data object contains specific ISO 6081 date when passing YYYY-MM-DD date string.`, () => {
  const SM = new Supermailer(config);
  SM.data.addDate('test_date', '2015-02-01');
  expect(SM.attributes['test_date']).toEqual('2015-02-01T00:00:00.000Z');
});

it(`Passes when data object contains specific ISO 6081 date when passing RFC 3339 date string.`, () => {
  const SM = new Supermailer(config);
  SM.data.addDate('test_date', '2019-06-21T10:17:24.374Z');
  expect(SM.attributes['test_date']).toEqual('2019-06-21T10:17:24.374Z');
});

it(`Throws when omitting the second parameter.`, () => {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addDate('test');
  }).toThrow();
});

it(`Throws when passing a boolean.`, () => {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addDate('test', false);
  }).toThrow();
});

it(`Throws when passing an integer.`, () => {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addDate('test', 1);
  }).toThrow();
});

it(`Throws when passing a non date string.`, () => {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addDate('test_date', 'string');
  }).toThrow();
});

it(`Throws when passing date with YYYY/MM/DD format.`, () => {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addDate('test_date', '2015/02/01');
  }).toThrow();
});
