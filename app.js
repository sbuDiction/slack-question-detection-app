const { config } = require('dotenv');
const { App } = require('@slack/bolt');
const fs = require('fs');
const { registerListeners } = require('./listeners');
const { checkInScheduler } = require('./helpers/check-in-scheduler');
const { db } = require('./db');


config();

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});



// checkInScheduler(app);
registerListeners(app);

(async () => {
  // Start your app
  await app.start();
  // await db.migrate()

  console.log('⚡️ Bolt app is running!');
})();