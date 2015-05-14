var app = require('http').createServer(handler)
var io = require('socket.io')(app);

var port = 8000;

app.listen(port);

console.log("Server running on port:" + port);