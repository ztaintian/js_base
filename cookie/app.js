var express=require('express');
var app = require('express')();
var server = require('http').Server(app);
var path=require('path');
server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.use(express.static(path.join(__dirname,'')));