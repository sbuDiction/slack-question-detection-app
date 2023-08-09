
// const { App, LogLevel } = require('@slack/bolt');
// const { config } = require('dotenv');
// const { registerListeners } = require('./listeners');
// const WebSocket = require('ws');
// const fs = require('fs');
// const axios = require('axios');

// config();

// /** Initialization */
// const app = new App({
//   token: process.env.SLACK_USER_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   appToken: process.env.SLACK_APP_TOKEN,
//   socketMode: true,

//   // logLevel: LogLevel.DEBUG,
// });

// // Function to create a new file
// const createFile = async () => {
//   const slackUsers = await app.client.users.list();
//   const jsonString = JSON.stringify(slackUsers);
//   // Write the JSON string to a file
//   fs.writeFile(filePath, jsonString, encodingType, (err) => {
//     if (err) {
//       console.error('Error writing JSON file:', err);
//     } else {
//       console.log('JSON file saved successfully!');
//     }
//   });
// }

// // Specify the file path
// const filePath = 'slack-users.json';
// const encodingType = 'utf-8';

// // Check if the file exists
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     // File does not exist, create a new one
//     createFile();
//   } else {
//     console.log('File already exists!');
//   }
// });



// // Set the headers for the POST request
// const headers = {
//   Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}`,
//   'Content-type': 'application/x-www-form-urlencoded',
// };

// // const rtmInstance = app.client.rtm.connect();
// // console.log(rtmInstance);

// // app.event('im_close', async ({ event, client, logger }) => {
// //   try {
// //     console.log(event);
// //   }
// //   catch (error) {
// //     logger.error(error);
// //   }
// // });

// // app.event('im_open', async ({ event, client, logger }) => {
// //   try {
// //     console.log(event);
// //   }
// //   catch (error) {
// //     logger.error(error);
// //   }
// // });

// // This will match any message that contains 👋
// app.message('test', async ({ message, say }) => {
//   // Handle only newly posted messages here
//   console.log(message);
// });

// /** Register Listeners */
// // registerListeners(app);

// (async () => {
//   try {
//     // await axios.get('https://slack.com/api/rtm.connect', { headers })
//     //   .then(res => {
//     //     console.log(res.data);
//     //     let { url, ok } = res.data;
//     //     if (ok) {
//     //       let socket = new WebSocket(url);
//     //       socket.onopen = e => {
//     //         // connection established
//     //       }

//     //       socket.onmessage = e => {
//     //         // application received message
//     //         console.log(e.data);
//     //       }
//     //     }
//     //   })
//     await app.start(process.env.PORT || 3000);
//     console.log('⚡️ Bolt app is running! ⚡️');
//   } catch (error) {
//     console.error('Unable to start App', error);
//   }
// })();

const { config } = require('dotenv');
const { App } = require('@slack/bolt');
const fs = require('fs');
const { registerListeners } = require('./listeners');
const { checkInScheduler } = require('./helpers/check-in-scheduler');


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







// Function to create a new file
// const createFile = async () => {
// const slackChannels = await app.client.conversations.list({
//   types:'private_channel'
// });
//   const jsonString = JSON.stringify(slackChannels);
//   // Write the JSON string to a file
//   fs.writeFile(filePath, jsonString, encodingType, (err) => {
//     if (err) {
//       console.error('Error writing JSON file:', err);
//     } else {
//       console.log('JSON file saved successfully!');
//     }
//   });
// }

// // Specify the file path
// const filePath = 'slack-channels.json';
// const encodingType = 'utf-8';

// // Check if the file exists
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     // File does not exist, create a new one
//     createFile();
//   } else {
//     console.log('File already exists!');
//   }
// });


// checkInScheduler(app);
registerListeners(app);

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();