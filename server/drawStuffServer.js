var app = require('http').createServer(handler)
var io = require('socket.io')(app);

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'bethany',
  password : 'St-gi-pi-Ba-8',
  database : 'DrawStuff'
});

var port = 8005;

app.listen(port);

console.log("Server running on port:" + port);

function handler (req, res) {
  console.log("REQUEST");
    /*
    fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
  */
  
}

io.on('connection', function(socket) {
    socket.on('mobileInit', function(data) {
        
    });
    
    socket.on('clientInit', function(data) {
        
    });
});