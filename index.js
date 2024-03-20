import Evento from "./modelo/Evento.js";
import express from 'express';
import rotaEvento from "./rotas/rotaEvento.js";

const host = 'localhost';
const porta = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/eventos', rotaEvento);
app.listen(porta, host, () => {
    console.log(`Servidor iniciado na porta ${porta}`);
    console.log(`Servidor iniciado na URL http://${host}:${porta}`);
})