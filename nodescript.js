var http = require('http');
// var dt = require('./mymodule');
var url = require('url');
var fs = require('fs');
const { Client } = require('pg');

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'}); //http header
  // res.write("heyo");
  // res.end("yeet");
//   res.write(req.url); //get request url
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write(txt);
//   res.end('Hello World!'+dt.myDateTime());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();
client.query('SELECT * FROM users;', (err, res) => {
  if (err) throw err;
  res.writeHead(200, {'Content-Type': 'text/html'});
  for (let row of res.rows) {
    res.write(JSON.stringify(row));
  }
  client.end();
  res.end();
});



// fs.readFile('mytextfile.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });





}).listen(process.env.PORT || 8080);




