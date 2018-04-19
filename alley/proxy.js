var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/modulith', proxy({target: 'http://bowling-modulith.cfapps.io', changeOrigin: true}));
app.use('/source', proxy({target: 'http://bowling-source.cfapps.io', changeOrigin: true}));
app.use('/transform', proxy({target: 'http://localhost:8080', changeOrigin: true}));
app.use('/sink', proxy({target: 'http://bowling-sink.cfapps.io', changeOrigin: true}));
app.use('/requests', proxy({target: 'http://35.188.192.166:80', changeOrigin: true}));
app.use('/', proxy({target: 'http://localhost:3449', changeOrigin: true}));
app.listen(8000);
