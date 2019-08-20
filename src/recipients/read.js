const get = require('lodash/get');

module.exports = async function read() {
  const response = await this.api.get(`/api/supermailer/recipients/${this.email}`);
  return get(response, 'data.results[0]', null);
};
