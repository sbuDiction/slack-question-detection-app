const cron = require('node-cron');
const { postCheckInMessage } = require('../tasks/post-check-in-message');

module.exports.checkInScheduler = (app) => cron.schedule('22 21 * * *', () => {
    postCheckInMessage(app);
});