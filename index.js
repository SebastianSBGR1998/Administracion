
/* no es necesario poner la extension del archivo frutas siempre
y cuando sea un archivo .js
require importa del archivo frutas que esta en al mismo nivel
en la gerarquia de app.js 

const frutas = require("./frutas");


// para llamar mas de 1 constante usamos:

const {frutas, dinero} = require("./frutas");

// llamamos al cowsay

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a mikaaaaa",
    e: "oO",
    T: "U "
}));

frutas.forEach((fruta) => {
    console.log(fruta);
});

console.log("El dinero del mercado es: " + dinero);


// aqui empieza la creacion de un servidor usando http

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('estoy respondiendo a tu solicitud version 2');

});

const puerto = 3000;
server.listen(puerto, () => {
    console.log('escuchando solicitudes');
});

// cada vez que se haga un cambio hay que reiniciar el servidor
*/

// aqui empieza la creacion de un servidor usando express:

const express = require('express');
const app = express();

const port = 3000;

//conexion base de datos
const mongoose = require('mongoose');

const user = 'dataBase_Conection';
const password = '5uDSYjMUGRHoH4CD';
const dbname = 'proyectDB';
const uri = `mongodb+srv://${user}:${password}@cluster0.x7dka.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// al ponerla primero, accede primero a esta ruta
app.use(express.static(__dirname + "/public"));

// esta es la nueva ruta de web
// rutasweb
app.use('/', require('./router/RutasWeb'));
app.use('/students', require('./router/Students'));

/*
// antes de router este estaba funcionando
app.get('/', (req,res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
})

// app.get('/', (req, res) => {
//     res.send('Mi respuesta desde express')
// })

// antes de router este estaba funcionando
app.get('/servicios', (req, res) => {
    res.send('Saludos desde servicios')
})
*/

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
})