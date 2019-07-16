module.exports = async function _delete(email) {
  if (typeof email !== 'string') {
    throw new Error(
      `Supermailer.recipients.delete parameter must be the current email of the user and must be a string.`
    );
  }

  email = encodeURIComponent(email);

  try {
    const response = await this.api.delete(`/api/supermailer/recipients/${email}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
