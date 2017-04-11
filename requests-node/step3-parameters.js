const https = require('https');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(object) {
  https.get(object, (response) => {
    response.setEncoding('utf8');
    let responseString = '';
    response.on('data', (data) => {
      responseString += data;
      console.log(responseString)
    });
    response.on('end', () => {
    console.log("stream complete")
    });
  });
}
getAndPrintHTML(options);