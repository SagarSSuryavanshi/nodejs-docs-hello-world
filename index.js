const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Jenkins integration with Github and Docker");
    response.end("Hello World!");
    response.end("Jenkins integration with Github and Docker");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
