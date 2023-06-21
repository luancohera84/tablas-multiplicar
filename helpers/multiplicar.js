const fs = require('fs');
const colors =  require('colors');

const crearArchivoTabla = async ( base, listar, hasta ) => {
    try {
        let data = '';
        let consola = '';
        let saltoLn = '\n'
        for (let index = 1; index <= hasta; index++) {
            if (index === hasta) {
                saltoLn  = '';
            }
            consola += `${ base } ${ colors.green('X') } ${ index } ${ colors.green('=') } ${ base*index } ${ saltoLn }`;
            data += `${ base } X ${ index } = ${ base*index } ${ saltoLn }`;
        }
        if (listar) {
            console.log('===================='.green);
            console.log(` ${ ' Tabla del:'.red } ${ colors.red( base ) } `);
            console.log('===================='.green);
            console.log(consola);
        }
        fs.writeFileSync( `./tablas/tabla-${ base }.txt`, data);
        return `Tabla del: ${ base }`;
    } catch (error) {
        console.log(`  Error al crear la tabla del: ${ base }. Error => ${ error } `);
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
}