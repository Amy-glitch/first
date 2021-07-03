var http = require('http');
 var dt = require('./mymodule');
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

res.writeHead(200, {'Content-Type': 'text/html'});
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();

// let str='yeet'
client.query('SELECT * FROM users;', (err, ress) => {
  if (err) throw err;
  for (let row of ress.rows) {
    console.log(JSON.stringify(row));
    res.write(JSON.stringify(row));

  }
  res.write("pofpofpof");
  client.end();
  return   res.end('Hello World!'+dt.myDateTime());
});



// fs.readFile('mytextfile.txt', function(err, data) {
    
//     res.write(data);
//     return res.end();
//   });





}).listen(process.env.PORT || 8080);




