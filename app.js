
require('dotenv').config();
const express = require('express');
const app = express();
//const port = 8080;
const port= process.env.port;
// Establece la carpeta estática donde se encuentran los archivos de la plantilla.
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/roadtrip');
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo con su respectiva ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/roadtrip');
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});


