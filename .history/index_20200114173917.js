const express = require('express');

const app = express();

app.use(express.json());
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

app.post('/User',(req,res) => {
    console.log(req.body);
return res.json({"message":"Hello Word"});
});
app.listen(3333);