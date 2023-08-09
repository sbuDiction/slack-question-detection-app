const fs = require('fs');

module.exports.savePostedMessage = message => {
    const filePath = 'posted-message.json';
    const jsonMessage = JSON.stringify(message);

    fs.writeFile(filePath, jsonMessage, 'utf-8', (err) => {
        if (err) {
            console.log('Error writing JSON file:', err);
        } else {
            isFileAdded = true;
            console.log('JSON file saved successfully!');
        }
    });
}