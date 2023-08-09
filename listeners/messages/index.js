const { appMessageListenerCallback } = require('./app-message');

module.exports.register = (app) => {
  app.message(/^.*/, appMessageListenerCallback);
};
