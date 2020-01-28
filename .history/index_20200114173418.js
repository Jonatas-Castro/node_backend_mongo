const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params: req.params (Identificar um recurso na alteração. remoção)
// Body:

app.get('/User',(req,res) => {
return res.json({"message":"Hello Word"});
});
app.listen(3333);