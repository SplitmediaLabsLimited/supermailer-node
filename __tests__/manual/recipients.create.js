// MANUAL TEST FOR DEMONTRATING API USAGE

const config = require('../config');
const Supermailer = require('../../index');
const SM = new Supermailer(config);

SM.data.addDate('2014-03-02');
SM.data.addString('2014-03-02');
