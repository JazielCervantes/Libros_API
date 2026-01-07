const librosService = require('../services/libros.service');

function mostrarLibros(req, res) {
    const resultado = librosService.obtenerLibros();
    res.json(resultado);
}

module.exports = {
    mostrarLibros
};