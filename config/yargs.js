const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Número de la tabla.'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Opción si quiere listar el resultado de la tabla en consola.'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Número hasta donde multiplicara.'
        })
        .check( ( argv, option ) => {
            if ( isNaN( argv.b ) ) {
                throw 'La base tiene que ser un número';
            }
            return true;
        })
        .check( ( argv, option ) => {
            if ( isNaN( argv.h ) ) {
                throw 'La opción hasta tiene que ser un número';
            }
            return true;
        })
        .argv;

module.exports = argv;