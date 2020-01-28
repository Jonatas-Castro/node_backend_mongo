const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body:

app.post('/User',(req,res) => {
    console.log(req.body);
return res.json({"message":"Hello Word"});
});
app.listen(3333);