module.exports = class Recipient {
  constructor({ email, api }) {
    this.api = api;
    this.email = email;

    this.create = require('./recipients/create').bind(this);
    this.delete = require('./recipients/delete').bind(this);
    this.logs = require('./recipients/logs').bind(this);
    this.read = require('./recipients/read').bind(this);
    this.update = require('./recipients/update').bind(this);

    this.data = {
      addBoolean: require('./data/addBoolean').bind(this),
      addDate: require('./data/addDate').bind(this),
      addEvent: require('./data/addEvent').bind(this),
      addNumber: require('./data/addNumber').bind(this),
      addString: require('./data/addString').bind(this),
    };

    this.attributes = {};
  }
};
