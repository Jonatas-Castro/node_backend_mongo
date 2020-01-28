const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params:
// Body:

app.get('/',(req,res) => {
return res.json({"message":"Hello Word"});
});
app.listen(3333);