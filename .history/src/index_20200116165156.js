const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://jonatas:klangoooo@cluster0-tos4x.mongodb.net/dbnode?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true})

const app = express();
app.use(cors()); // {origin:'http://localhost:3000'}
app.use(express.json());
app.use(routes);


app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query params: req.query (Filtros, Ordenação, Paginação, ...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

// MongoDB ( Não-relacional )