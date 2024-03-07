import Evento from "./modelo/Evento.js";

const evento = new Evento(1,
    "Copa do Mundo 2026",
    "Copa do Mundo 2026",
    "2026-06-12",
    "10:00",
    "França",
    100,
    100
    );


let listaDeEventos = [];
evento.consultar("3").then((listaDeEventos) => {
    for (const evento of listaDeEventos) {
        console.log(evento.toJSON());
    }
}).catch((erro) => {
    console.log('Descrição do erro:\n'+erro);
});


