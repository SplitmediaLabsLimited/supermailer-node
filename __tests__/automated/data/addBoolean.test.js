const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');

it(`Throws when not passing second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addBoolean('test');
  }).toThrow();
});

it(`Throws when passing something else than a boolean as second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addBoolean('test', 'testing value');
  }).toThrow();
});

it(`Passes when passing a boolean as value in second parameter.`, function() {
  const SM = new Supermailer(config);
  SM.data.addBoolean('test', false);
  expect(SM.attributes['test']).toBe(false);
});
