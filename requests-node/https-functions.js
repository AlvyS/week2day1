const https = require('https');
const getHTML = require('./step5-modular');
const toLowerCase = require('./print_lowercase')
const toUpperCase = require('./print_uppercase')
const reverse = require('./print_reverse')
const leet = require('./print_1337')

const options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
console.log(html);
}

// getHTML(options, printHTML);
// getHTML(options, toLowerCase);
// getHTML(options, toUpperCase);
// getHTML(options, reverse);
getHTML(options, leet)