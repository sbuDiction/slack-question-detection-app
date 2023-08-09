
const appMentionMatchCallBack = ({ client, event, message }) => {
    console.log('APP MENTIONED');
    console.log(message);
}

module.exports = { appMentionMatchCallBack }