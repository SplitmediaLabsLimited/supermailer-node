// MANUAL TEST ONLY FOR NOW TO AVOID SPAM
// SUPERMAILER API & WORKERS HAVE TO BE RUNNIG FOR THE EMAIL TO BE SENT

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const config = require('../config');
const Supermailer = require('../lib/Supermailer');

(async function testSendTransactional() {
  const SM = new Supermailer(config);
  const pubsubMessageId = await SM.email.sendTransactional({
    templateGroup: 'Transactional_1',
    recipientEmail: 'YOUR-EMAIL-HERE',
    templateData: {
      sup: 'HELLO',
      test: 'TEST',
    },
  });
  console.log(pubsubMessageId);
})();
