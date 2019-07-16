// MANUAL TEST ONLY FOR NOW

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const config = require('../config');
const Supermailer = require('../lib/Supermailer');

(async function testRecipientsLogs() {
  const SM = new Supermailer(config);
  const logs = await SM.recipients.logs('YOUR-EMAIL-HERE', 2, 1);
  console.log(logs);
})();
