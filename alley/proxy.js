var httpProxy = require('http-proxy');
var http = require('http');
var url = require('url');

//var proxy = httpProxy.createProxyServer({target:'http://35.193.4.148'}).listen(8000)

var proxy = httpProxy.createProxyServer()

var router = http.createServer(
  function(req, res) {
    console.log("Received request on proxy server")
    var target = url.parse(req.url)
    if(target.pathname.startsWith('/games')) {
      console.log("Forwading request to source/sink")
      proxy.web(req, res, {target: 'http://localhost:8080'})
    } else if(target.pathname.startsWith('/requests/rolls')) {
      console.log("Forwarding request to scoring function")
      proxy.web(req, res, {target: 'http://35.193.4.148'})
    } else {
      console.log("Forwarding request to the default server")
      proxy.web(req, res, {target: 'http://localhost:3449'})
    }
  }
)
router.listen(8000)
