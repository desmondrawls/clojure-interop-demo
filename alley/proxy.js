var httpProxy = require('http-proxy');
var http = require('http');
var url = require('url');

//var proxy = httpProxy.createProxyServer({target:'http://35.193.4.148'}).listen(8000)

var proxy = httpProxy.createProxyServer()

var router = http.createServer(
  function(req, res) {
    console.log("Received request on proxy server")
    var target = url.parse(req.url)
    if(target.pathname.endsWith('/rolls/new')) {
      console.log("Forwarding request to transform")
      proxy.web(req, res, {target: 'http://localhost:8080'})
    } else if(target.pathname.endsWith('/score')) {
      console.log("Forwarding request to transform")
      proxy.web(req, res, {target: 'http://localhost:8080'})
    } else if(target.pathname.startsWith('/source/games')) {
      console.log("Forwarding request to source")
      proxy.web(req, res, {target: 'http://localhost:8081'})
    } else if(target.pathname.startsWith('/games')) {
      console.log("Forwarding request to sink")
      proxy.web(req, res, {target: 'http://localhost:8082'})
    } else if(target.pathname.startsWith('/requests/rolls')) {
      console.log("Forwarding request to scoring function")
      proxy.web(req, res, {target: 'http://35.193.96.28:80'})
    } else {
      console.log("Forwarding request to the default server")
      proxy.web(req, res, {target: 'http://localhost:3449'})
    }
  }
)
router.listen(8000)
