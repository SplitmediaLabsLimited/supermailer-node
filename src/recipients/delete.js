module.exports = async function _delete() {
  try {
    const response = await this.api.delete(`/api/supermailer/recipients/${this.email}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
