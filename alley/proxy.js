var httpProxy = require('http-proxy');
var http = require('http');
var https = require('https');
var url = require('url');
var fs = require('fs');

var proxy = httpProxy.createProxyServer()

const SECURE_OPTIONS = {
  cert: fs.readFileSync('crt/localhost.crt', 'utf-8'),
  key: fs.readFileSync('crt/localhost.key', 'utf-8')
}

var router = http.createServer(
  function(req, res) {
    var target = url.parse(req.url)
    if (target.pathname.startsWith('/modulith')) {
      console.log("Forwarding this request to the modulith")
      console.log("HOST: ", target.host)
      req.headers.host = 'bowling-modulith.cfapps.io'
      proxy.web(req, res, {target: 'http://bowling-modulith.cfapps.io'})
    } if (target.pathname.startsWith('/local/modulith')) {
      console.log("Forwarding this request to the local modulith")
      proxy.web(req, res, {target: 'http://localhost:8080'})
    } else if(target.pathname.startsWith('/source')) {
      console.log("Forwarding this request to the source")
      proxy.web(req, res, {target: 'http://bowling-source.cfapps.io:8080'})
    } else if(target.pathname.startsWith('/local/source')) {
      console.log("Forwarding this request to the local source")
      proxy.web(req, res, {target: 'http://localhost:8081'})
    } else if(target.pathname.startsWith('/sink')) {
      console.log("Forwarding this request to the sink")
      proxy.web(req, res, {target: 'http://bowling-sink.cfapps.io:8080'})
    } else if(target.pathname.startsWith('/local/sink')) {
      console.log("Forwarding this request to the local sink")
      proxy.web(req, res, {target: 'http://localhost:8082'})
    } else if(target.pathname.startsWith('/transform')) {
      console.log("Forwarding this request to the transform")
      console.log("REQUEST: ", req.url)
      proxy.web(req, res, {target: 'http://bowling-transform.cfapps.io:8080'})
    } else if(target.pathname.startsWith('/local/transform')) {
      console.log("Forwarding this request to the local transform")
      proxy.web(req, res, {target: 'http://localhost:8083'})
    } else if(target.pathname.startsWith('/requests')) {
      console.log("Forwarding this request to riff")
      proxy.web(req, res, {target: 'http://35.193.96.28:80'})
    } else {
      proxy.web(req, res, {target: 'http://localhost:3449'})
    }
  }
)
router.listen(8000)
