var http = require('http');
// var dt = require('./mymodule');
// var url = require('url');
// var fs = require('fs');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //http header
  res.write("heyo");
//   res.write(req.url); //get request url
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write(txt);
//   res.end('Hello World!'+dt.myDateTime());

// fs.readFile('mytextfile.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });





}).listen(process.env.PORT || 8080);