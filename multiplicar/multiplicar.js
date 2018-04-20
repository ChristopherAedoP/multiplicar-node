//requireds
const fs = require('fs');
// const fs = require('express'); => requiere dependencia externa
// const fs = require('fs');	=> requiere archivo creado en el proyecto
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${ base }.txt`);
        });
    })
}

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`tabla-${ base }`.green);
    console.log('===================='.green);
    if (!Number(base)) {
        console.log(`El valor introducido ${ base } no es un numero`);
        return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i }`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}