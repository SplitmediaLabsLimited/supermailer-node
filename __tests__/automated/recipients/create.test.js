const config = require('../../config');
const fakeRecipient = require('./fakeRecipient');
const Supermailer = require('../../lib/Supermailer');

it('Passes when creating recipient with email only.', async () => {
  const SM = new Supermailer(config);

  SM.data.addString('email', fakeRecipient.email);

  const response = await SM.recipients.create();

  expect(response.is_test).toBe(false);
  expect(response.email).toEqual(fakeRecipient.email);
});

it('Passes when creating recipient with email and other attributes.', async () => {
  const SM = new Supermailer(config);

  SM.data.addString('email', fakeRecipient.email);
  SM.data.addString('other_attribute', 'other_attribute');

  const response = await SM.recipients.create();

  expect(response.is_test).toBe(false);
  expect(response.email).toEqual(fakeRecipient.email);
});

it('Throws when not adding data at all on the Supermailer object.', async () => {
  const SM = new Supermailer(config);

  let error;

  try {
    await SM.recipients.create();
  } catch (e) {
    error = e;
  }

  expect(error).toBeInstanceOf(Error);
});

it('Throws when not adding email data but adding other attributes.', async () => {
  const SM = new Supermailer(config);

  SM.data.addString('string', fakeRecipient.data.string);

  let error;

  try {
    await SM.recipients.create();
  } catch (e) {
    error = e;
  }

  expect(error).toBeInstanceOf(Error);
});
