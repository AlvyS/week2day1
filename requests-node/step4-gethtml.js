const https = require('https');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getHTML(object, callback) {
  https.get(object, (response) => {
    response.setEncoding('utf8');
    let responseString = '';
    response.on('data', (data) => {
      responseString += data;
    });
    response.on('end', () => {
      callback(responseString);
    // console.log("stream complete")
    });
  });
}

function printHTML(html) {
  console.log(html);
}

getHTML(options, printHTML);