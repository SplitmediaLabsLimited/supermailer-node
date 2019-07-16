const config = require('../../config');
const fakeRecipient = require('./fakeRecipient');
const Supermailer = require('../../lib/Supermailer');

it(`Passes when passing the email as first parameter recipient using the email ${fakeRecipient.email}.`, async () => {
  const SM = new Supermailer(config);
  const response = await SM.recipients.delete(fakeRecipient.email);

  expect(response.kind).toEqual('Recipient');
  expect(response.name).toEqual(`${config.namespace}//${fakeRecipient.email}`);
  expect(response.path).toMatchObject(['Recipient', `${config.namespace}//${fakeRecipient.email}`]);
});

it('Throws when ommiting first email parameter', async () => {
  const SM = new Supermailer(config);

  let error;

  try {
    await SM.recipients.delete();
  } catch (e) {
    error = e;
  }

  expect(error).toBeInstanceOf(Error);
});
