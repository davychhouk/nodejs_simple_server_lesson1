const http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;
    if (url === "/helloWorld") {
        res.write("Hello World! Welcome to node.js® by ក4កូដ!");
        res.end();
    }
}).listen(3000, function() {
    console.log("server start at port 3000");
});
