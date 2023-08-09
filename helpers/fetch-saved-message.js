const fs = require('fs');

module.exports.fetchSavedMessage = () => {
    const filePath = 'posted-message.json';
    try {
        const message = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(message);
    } catch (error) {

    }
}