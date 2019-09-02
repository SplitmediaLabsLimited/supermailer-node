module.exports = async function sendTransactional(payload) {
  if (
    typeof payload !== 'object' ||
    typeof payload.templateGroup !== 'string' ||
    typeof payload.recipientEmail !== 'string'
  ) {
    throw new Error(
      `Supermailer.email.sendTransactional only parameter needs to be an object and contain 'templateGroup' and 'recipientEmail' properties that are strings.`
    );
  }

  try {
    const response = await this.api.post('/api/supermailer/transactionals/send', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
