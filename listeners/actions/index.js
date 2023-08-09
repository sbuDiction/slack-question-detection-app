// const { sampleActionCallback } = require('./sample-action');
const { cohortActionCallback } = require('./cohort-action');
const { capStoneActionCallback } = require('./capstone-action');

module.exports.register = (app) => {
  // const cohortInstance = cohortActionCallback(app)
  // app.action('sample_action_id', sampleActionCallback);
  app.action('post_to_cohort', cohortActionCallback);
  app.action('post_to_capstone', capStoneActionCallback);
};
