const appHomeOpenedCallback = async ({ client, event }) => {
  console.log('APP HOME OPENED');
  // Ignore the `app_home_opened` event for anything but the Home tab
  if (event.tab !== 'home') return;

  try {
    await client.views.publish({
      user_id: event.user,
      view: {
        "type": "home",
        "blocks": [
          {
            "type": "header",
            "text": {
              "type": "plain_text",
              "text": " Here's what you can do with the app:"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Create Message For Cohort",
                  "emoji": true
                },
                "style": "primary",
                "value": "create_task_for_check_in",
                "action_id": "create_task_for_cohort"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Create Message For Capstone",
                  "emoji": true
                },
                "style": "primary",
                "value": "create_task_for_capstone",
                "action_id": "create_task_for_capstone"
              }
            ]
          },
          {
            "type": "divider"
          }
        ]
      },
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { appHomeOpenedCallback };
