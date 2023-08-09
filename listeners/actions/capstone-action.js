const { postCapstoneMessages } = require('../../tasks/post-capstone-messages');

const capStoneActionCallback = async ({ ack, client, body }) => {
    await ack();
    const { message } = body;
    // console.log("BODY:",body.message);
    postCapstoneMessages(client);
    console.log("Capstone");
}

module.exports = { capStoneActionCallback }