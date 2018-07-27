var http = require('http');

let server = http.createServer( (request, response) => {

    response.write('<h1>Node HTTP Server</h1>');
    response.end('<h2>Done at Verizon</h2>');

});

server.listen(5000, ()=> {
    console.log('Server Running Use http://localhost:5000/');
})