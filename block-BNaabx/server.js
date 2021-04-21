var express = require("express")

var app = express()


var time = new Date();
var fs = require('fs');

var sec = time.getSeconds();
var min = time.getMinutes();
var hour = time.getHours();


var logger = require("morgan")

app.use(logger('dev'))

app.use((req, res, next) => {
    console.log(req.method, req.url, `${hour}:${min}:${sec}`);
    next();
  });
 
  app.use((req, res, next) => {
    req.body = {};
    var data = '';
    req.on('data', (chunk) => {
      data += chunk.toString();
    });
    req.on('end', () => {
      if (!data) return next();
      // JSON handler
      if (data && req.headers['content-type'] === 'application/json') {
        data = JSON.parse(data);
        req.body = { ...data };
      }
      next();
    });
  });

  
  var publicPath = __dirname + '/public';
  app.use((req, res, next) => {
    var filePath = publicPath + req.path;
    fs.readFile(filePath, 'utf8', (err, file) => {
      if (err) return next();
      res.sendFile(filePath);
    });
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.post('/form', (req, res) => {
    console.log(req.body);
  });
  app.use((req, res, next) => {
    res.status(404).send('Page not found');
  });


app.listen(5000,()=>{
    console.log("Server is running at port 5000")
})