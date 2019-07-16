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

    // Initialize config object
    this.config = {
      api: {
        key: config.apiKey,
        url: config.apiUrl,
      },
      namespace: config.namespace,
    };

    // Initialize api object
    this.api = require('../lib/api').create({
      baseURL: `https://${this.config.api.url}`,
      headers: { 'X-Supermailer-Api-Key': this.config.api.key, 'X-Supermailer-Namespace': this.config.namespace },
    });

    // Initialize email methods
    this.email = {
      sendTransactional: require('./emails/sendTransactional').bind(this),
    };

    // Initialize recipients methods
    this.recipients = {
      create: require('./recipients/create').bind(this),
      update: require('./recipients/update').bind(this),
      delete: require('./recipients/delete').bind(this),
      logs: require('./recipients/logs').bind(this),
    };

    // Initialize the data methods
    this.data = {
      addBoolean: require('./data/addBoolean').bind(this),
      addDate: require('./data/addDate').bind(this),
      addEvent: require('./data/addEvent').bind(this),
      addNumber: require('./data/addNumber').bind(this),
      addString: require('./data/addString').bind(this),
    };

    // Initialize the attributes object for sending data through the library
    this.attributes = {};
  }
}

module.exports = Supermailer;
