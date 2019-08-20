module.exports = async function _delete() {
  const response = await this.api.delete(`/api/supermailer/recipients/${this.email}`);
  return response.data;
};
