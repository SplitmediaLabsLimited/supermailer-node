module.exports = async function create() {
  const payload = this.attributes;

  if (Object.entries(payload).length === 0) {
    throw new Error(
      'There is no data on the Supermailer data object. Set the data with Supermailer.data.add* methods before using Supermailer.recipients.create().'
    );
  }

  if (typeof payload.email !== 'string') {
    throw new Error(
      `You need to set at least the email of type string on the Supermailer data object to create a recipient. Use Supermailer.data.addString('email', 'your_value') to do so.`
    );
  }

  try {
    const response = await this.api.post(`/api/supermailer/recipients`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
