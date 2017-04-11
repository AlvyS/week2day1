const https = require('https');

module.exports = function getHTML(object, callback) {
  https.get(object, (response) => {
    response.setEncoding('utf8');
    let responseString = '';
    response.on('data', (data) => {
      responseString += data;
    });
    response.on('end', () => {
      callback(responseString);
    });
  });
}