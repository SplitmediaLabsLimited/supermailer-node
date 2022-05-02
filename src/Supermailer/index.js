const Recipient = require('../Recipient');

class Supermailer {
  constructor(config) {
    if (
      typeof config !== 'object' ||
      typeof config.apiKey !== 'string' ||
      typeof config.apiUrl !== 'string' ||
      typeof config.namespace !== 'string'
    ) {
      throw new Error(
        `You must pass a config object to Supermailer's constructor containing 'apiKey', 'apiUrl' and 'namespace' properties. You can get your api key in Supermailer under /settings.`
      );
    }

    // Initialize api object
    const api = require('../lib/api').create({
      baseURL: `https://${config.apiUrl}`,
      headers: { 'X-Supermailer-Api-Key': config.apiKey, 'X-Supermailer-Namespace': config.namespace },
    });
    this.api = api;

    // Initialize email methods
    this.emails = {
      sendTransactional: require('./emails/sendTransactional').bind(this),
    };

    this.Recipient = function (email) {
      if (typeof email !== 'string') {
        throw new Error('You need to pass an email string as the only parameter to this function.');
      }
      return new Recipient({ email, api });
    };
  }
}

module.exports = Supermailer;
