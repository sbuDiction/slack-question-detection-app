const { postCapstoneMessages } = require('../../tasks/post-capstone-messages');

const capStoneActionCallback = async ({ ack, client, body }) => {
    try {
        await ack();
        const { message } = body;
        // console.log("BODY:",body.message);
        postCapstoneMessages(client);
    } catch (error) {

    }
}

module.exports = { capStoneActionCallback }