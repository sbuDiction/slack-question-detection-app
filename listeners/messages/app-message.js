const { savePostedMessage } = require('../../helpers/save-posted-message');

const appMessageListenerCallback = async ({ message, client }) => {
    try {
        const { user, channel, channel_type, text } = message;
        // const user = 'U05KHRR4YJU';
        // console.log("MESSAGE:", message);
        const appChannelId = 'D05JUSFNA1Z';
        // savePostedMessage(message);
        if (channel_type === 'im')
            if (channel === appChannelId) {
                await client.chat.postMessage({
                    channel: channel,
                    text: text,

                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "*Please select what to do with your message: *"
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "button",
                                    "text": {
                                        "type": "plain_text",
                                        "text": "Post To Cohort Channels",
                                        "emoji": true
                                    },
                                    "value": "cohort_ch",
                                    "action_id": "post_to_cohort",
                                    "style": "primary",
                                },
                                {
                                    "type": "button",
                                    "text": {
                                        "type": "plain_text",
                                        "text": "Post To Capstone Channels",
                                        "emoji": true
                                    },
                                    "value": "capstone_ch",
                                    "action_id": "post_to_capstone",
                                    "style": "primary",
                                }
                            ]
                        }
                    ]


                });
                savePostedMessage(message);
            }
    } catch (error) {
        console.error(error.data);
    }
};

module.exports = { appMessageListenerCallback };
