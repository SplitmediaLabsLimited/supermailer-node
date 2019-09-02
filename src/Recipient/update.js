module.exports = async function update() {
  const payload = this.data;

  if (Object.entries(payload).length === 0) {
    return true;
  }

  const response = await this.api.patch(`/api/supermailer/recipients/${this.email}`, payload);
  return response.data;
};
