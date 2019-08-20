module.exports = async function create() {
  const payload = {
    email: this.email,
    ...this.attributes,
  };

  if (Object.entries(payload).length === 0) {
    throw new Error(
      'There is no data on the Supermailer data object. Set the data with Supermailer.data.add* methods before using Supermailer.recipients.create().'
    );
  }

  const response = await this.api.post(`/api/supermailer/recipients`, payload);
  return response.data;
};
