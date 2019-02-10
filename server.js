const express = require('express');
const app = express();//es una variable que nos ayuda a utilizar express
const hbs = require('hbs');//Se utilizan los parciales para el codigo que es reutilizable
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));//En esta linea estamos especificando que esta carpeta
//va a ser de dominio publico y todo lo que ahi se agregue se va a poder ver en la web.

/*--------------
Para poder utilizar handlers se instala una paqueteria hbs pues nuestra pagina es dinamica
Express HBS enginer
---------------*/

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');
//Cuando tenemos una petición como la que sigue debemos tener cuidado de que no choquen
//-------solicitud, respuesta


app.get('/',  (req, res) => {//es una duncion get que debe contener un /

  //Al usar un ambiente de engine se puede renderizar culaquier cosa
  res.render('home', {
    nombre: 'nidiA',
    anio: new Date().getFullYear()
  });
  //res.send(salida);
  //La funcion send ya interpreta que es una salida en formato JSON
});

app.get('/about',  (req, res) => {
  res.render('about');

});

app.listen(3000, () =>{
  console.log('Escuchando peticiones por el puerto 3000');
});
