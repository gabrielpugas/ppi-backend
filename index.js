import Evento from "./modelo/Evento.js";

const evento = new Evento(13,
    "Copa do Mundo 2030",
    "Copa do Mundo 2030",
    "2026-06-12",
    "10:00",
    "França",
    100,
    100
    );


// evento.gravar(evento).then(() => {
//     console.log("O ID do evento foi gravado foi: " + evento.id +"\nEvento gravado com sucesso.")
// }).catch((erro) => {
//     console.log('Descrição do erro:\n'+erro);
// })

// evento.atualizar(evento).then(() => {
//     console.log("O evento "+evento.id+" foi atualizado.")
// }).catch((erro) => {
//     console.log('Descrição do erro:\n'+erro);
// })

// evento.excluir(evento).then(() => {
//     console.log("O evento "+evento.id+" foi excluído.")
// }).catch((erro) => {
//     console.log('Descrição do erro:\n'+JSON.stringify(erro));
// })

// let listaDeEventos = [];
// evento.consultar().then((listaDeEventos) => {
//     for (const evento of listaDeEventos) {
//         console.log(evento.toJSON());
//     }
// }).catch((erro) => {
//     console.log('Descrição do erro:\n'+erro);
// });


