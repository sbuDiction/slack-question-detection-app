const { fetchSavedMessage } = require('../helpers/fetch-saved-message');

module.exports.postCohortMessages = async (client) => {
    try {
        // store for all the channels to be broadcasted to
        const cohortsChannels = [];

        const { text, blocks } = fetchSavedMessage();
        // replace the @channel with <!channel> for broadcasting in the message text
        const broadcastMessage = text.replace(/@channel/, '<!channel>');
        // replace the @channel with an empty string in the message blocks 
        const blockText = blocks[0].elements[0].elements[0].text.replace(/@channel/, ' ');
        // assign the new string without the @channel string
        blocks[0].elements[0].elements[0].text = blockText;
        // 
        blocks[0].elements[0].elements.unshift({
            "type": "broadcast",
            "range": "channel"
        });

        // fetch all the slack channels.
        const slackChannels = await client.users.conversations({
            token: process.env.SLACK_USER_TOKEN,
            types: 'private_channel'
        });

        const channelsList = slackChannels.channels;
        channelsList.forEach(channel => {
            if (channel.name.includes('cohort'))
                // only store channels that include 'cohort' in their name
                cohortsChannels.push(channel.id);
        });

        cohortsChannels.forEach(async cohortId => {
            await client.chat.postMessage({
                token: process.env.SLACK_USER_TOKEN,
                channel: cohortId,
                text: broadcastMessage,
                blocks: blocks
            }).then(postedMessage => {
                // response
            })
        });
    } catch (error) {
        console.log(error);
    }
}