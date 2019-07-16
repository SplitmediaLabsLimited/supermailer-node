const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');

it(`Throws when not passing second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addString('test');
  }).toThrow();
});

it(`Throws when passing something else than a string as second argument.`, function() {
  const SM = new Supermailer(config);
  expect(_ => {
    SM.data.addString('test', false);
  }).toThrow();
});

it(`Passes when passing a string as value in second parameter.`, function() {
  const SM = new Supermailer(config);
  SM.data.addString('test', 'testing value');
  expect(SM.attributes['test']).toEqual('testing value');
});
