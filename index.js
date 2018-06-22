const prerender = require('prerender');
const server = prerender({
    port:3000,
    chromeLocation: process.env.CHROME_BIN || '/usr/bin/google-chrome-unstable',
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
server.start();
