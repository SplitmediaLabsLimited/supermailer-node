module.exports = class Recipient {
  constructor({ email, api }) {
    // Init values
    this.api = api;
    this.email = email;

    // Recipient methods
    this.create = require('./create').bind(this);
    this.delete = require('./delete').bind(this);
    this.logs = require('./logs').bind(this);
    this.read = require('./read').bind(this);
    this.update = require('./update').bind(this);

    // Data methods
    this.addBoolean = require('./addBoolean').bind(this);
    this.addDate = require('./addDate').bind(this);
    this.addEvent = require('./addEvent').bind(this);
    this.addNumber = require('./addNumber').bind(this);
    this.addString = require('./addString').bind(this);
    this.addData = require('./addData').bind(this);

    // Data object
    this.data = {};
  }
};
