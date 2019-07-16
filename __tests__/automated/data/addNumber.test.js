const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');

it(`Throws when not passing second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addNumber('test');
  }).toThrow();
});

it(`Throws when passing something else than an integer as second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addNumber('test', 'false');
  }).toThrow();
});

it(`Passes when passing an integer as value in second parameter.`, function() {
  const SM = new Supermailer(config);
  SM.data.addNumber('test', 123);
  expect(SM.attributes['test']).toEqual(123);
});
