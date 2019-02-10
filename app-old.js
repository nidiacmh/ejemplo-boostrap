const http = require('http');
//Para poder escuchar peticiones primero se crea

http.createServer((req,res) =>{

  res.writeHead(200, {'Content-Type': 'application/json'});

  let salida = {
    nombre: 'Nidia',
    edad: 27,
    url: req.url
  }

    //res.write('Hola mundo');
    res.write(JSON.stringify(salida));
    res.end();

})

//Seagrega el puerto por el que va a salir
.listen(8080);

console.log('Escuchando el puerto 8080');
