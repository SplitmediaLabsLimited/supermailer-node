const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');

it(`Passes when passing the name as the first parameter.`, function() {
  const SM = new Supermailer(config);
  SM.data.addEvent('test_event');
  expect(SM.attributes).toHaveProperty('test_event');
});
