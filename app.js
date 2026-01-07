const express = require('express');
const app = express();
const librosRoutes = require('./routes/libros.routes');

app.use('/libros', librosRoutes);

app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});