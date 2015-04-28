var unirest = require('unirest');

unirest.get('http://localhost:8080/headers')
       .end(function(response) {
    console.log('Status:', response.statusCode);
    console.log('Headers: ', response.headers);
    console.log('Body:', response.body);
});

/*var http = require('http');

http.get('http://0.0.0.0:8080/headers', function(response) {
    console.log('Status:', response.statusCode);
    console.log('Headers: ', response.headers);
    response.pipe(process.stdout);
});*/