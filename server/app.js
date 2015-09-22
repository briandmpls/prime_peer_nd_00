var http = require('http');
var getMoney = require('./getmoney');


http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(getMoney.accountBalance());
    response.write(getMoney.moolah());
    response.end();
}).listen(3000);

console.log("Listening on 3000");