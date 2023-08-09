const checkinMessageListenerCallback = async ({ message, client }) => {
    try {
        const { user, text } = message;
        // {
        //     client_msg_id: '86974202-6d67-42b6-9c19-1490bfbdb58b',
        //     type: 'message',
        //     text: 'checkin-message',
        //     user: 'U04RGL5EV89',
        //     ts: '1690980990.762399',
        //     blocks: [ { type: 'rich_text', block_id: 'HJ8l', elements: [Array] } ],
        //     team: 'T04R74C8196',
        //     channel: 'D04RTMN257S',
        //     event_ts: '1690980990.762399',
        //     channel_type: 'im'
        //   }


        const cohorts = ['C05KGAFL81M'];
        console.log(message);
        // fetch all the slack channels.
        // const slackChannels = await client.conversations.list({
        //     types: 'private_channel'
        // }).channels;

        // slackChannels.forEach(channel => {
        //     if (channel.name.includes('cohort'))
        //         // only store channels that include 'cohort' in their name
        //         cohorts.push(channel.id);
        // });

        // sending the message to all the cohorts.
        cohorts.forEach(cohortId => {
            client.chat.postMessage({
                channel: cohortId,
                text: text
            });
        });

    } catch (error) {
        console.error(error);
    }
};

module.exports = { checkinMessageListenerCallback };
