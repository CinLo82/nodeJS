const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {

    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('hola q tal');
            res.end();
            break;

        default:
            res.write('Error 404: no se que es lo que quieres');
            res.end();
    }
}

console.log('escuchando en el puerto 3000');