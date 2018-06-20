const prerender = require('prerender');
const server = prerender({
    port:13001,
    chromeLocation: process.env.CHROME_BIN
});
server.start();
