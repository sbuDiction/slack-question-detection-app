const { postCohortMessages } = require('../../tasks/post-check-in-message');

const cohortActionCallback = async ({ ack, client, body, logger }) => {
    try {
        await ack();
        const { message } = body;
        postCohortMessages(client, message);
    }
    catch (error) {
        logger.error(error);
    }
}

module.exports = { cohortActionCallback }