const libros = require('../data/libros.data');
const porcentajeLectura = require('../utils/random');

function obtenerLibros() {
    return libros.map(libro => ({
        ...libro,
        porcentajeLectura: porcentajeLectura() + '%'
    }));
}

module.exports = {
    obtenerLibros
};