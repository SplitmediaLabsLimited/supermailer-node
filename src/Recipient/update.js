module.exports = async function update() {
  const currentEmail = this.email;
  const payload = this.data;

  if (typeof currentEmail !== 'string') {
    throw new Error(
      `Supermailer.recipients.update needs a parameter that is the current email of the user and it has to be a string.`
    );
  }

  if (Object.entries(payload).length === 0) {
    throw new Error(
      `There is no data on the Supermailer attributes object. Set the data with Supermailer.data.add* methods before using Supermailer.recipients.update('user_current_email').`
    );
  }

  const response = await this.api.patch(`/api/supermailer/recipients/${currentEmail}`, payload);
  return response.data;
};
