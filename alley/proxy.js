var httpProxy = require('http-proxy');
var http = require('http');
var url = require('url');

var proxy = httpProxy.createProxyServer()

var router = http.createServer(
  function(req, res) {
    console.log("Received a request on the proxy server")
    var target = url.parse(req.url)
    if (target.pathname.startsWith('/modulith')) {
      console.log("Forwarding this request to the modulith")
      proxy.web(req, res, {target: 'http://localhost:8080'})
    } else if(target.pathname.startsWith('/source')) {
      console.log("Forwarding this request to the source")
      proxy.web(req, res, {target: 'http://localhost:8081'})
    } else if(target.pathname.startsWith('/sink')) {
      console.log("Forwarding this request to the sink")
      proxy.web(req, res, {target: 'http://localhost:8082'})
    } else if(target.pathname.startsWith('/transform')) {
      console.log("Forwarding this request to the transform")
      proxy.web(req, res, {target: 'http://localhost:8083'})
    } else if(target.pathname.startsWith('/requests')) {
      console.log("Forwarding this request to riff")
      proxy.web(req, res, {target: 'http://35.193.96.28:80'})
    } else {
      console.log("Forwarding this request to the default server")
      proxy.web(req, res, {target: 'http://localhost:3449'})
    }
  }
)
router.listen(8000)
