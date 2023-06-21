const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
require('colors');

console.clear();
// Recibiendo argumentos desde la consola nodejs con paquete yargs

crearArchivoTabla( argv.b, argv.l , argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'Creada con exito'.rainbow ) )
    .catch( error => console.log('Error =>', error) )

// Fin recibiendo argumentos desde la consola nodejs con paquete yargs






