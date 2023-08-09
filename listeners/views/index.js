const { sampleViewCallback } = require('./sample-view');
const { appResponseViewCallback } = require('./app-response-view');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('app_res_view_id', appResponseViewCallback);
};
