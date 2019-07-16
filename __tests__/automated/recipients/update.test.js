const config = require('../../config');
const Supermailer = require('../../lib/Supermailer');
const fakeRecipient = require('./fakeRecipient');

it(`Updates recipient ${fakeRecipient.email} with passed data object.`, async () => {
  const SM = new Supermailer(config);

  const string = SM.data.addString('string', fakeRecipient.data.string);
  const number = SM.data.addNumber('number', fakeRecipient.data.number);
  const boolean = SM.data.addBoolean('boolean', fakeRecipient.data.boolean);
  const date = SM.data.addDate('date', fakeRecipient.data.date);
  const event = SM.data.addEvent('event');

  const response = await SM.recipients.update(fakeRecipient.email);

  expect(response).toMatchObject({
    attributes: {
      string,
      number,
      boolean,
      date,
      event,
    },
  });
});

it('Throws when not passing a currentEmail as first parameter.', async () => {
  const SM = new Supermailer(config);

  let error;

  try {
    await SM.recipients.update();
  } catch (e) {
    error = e;
  }

  expect(error).toBeInstanceOf(Error);
});
