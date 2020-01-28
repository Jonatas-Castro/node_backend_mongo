const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jonatas:klangoooo@cluster0-tos4x.mongodb.net/dbnode?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true})

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

// MongoDB ( Não-relacional )


app.post('/User',(req,res) => {
    console.log(req.body);
return res.json({"message":"Hello Word"});
});
app.listen(3333);