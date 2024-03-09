import Evento from "./modelo/Evento.js";

const evento = new Evento(15,
    "Copa do Mundo 2080",
    "Copa do Mundo 2080",
    "2050-06-12",
    "10:00",
    "Inglaterra",
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

evento.consultar().then((listaDeEventos) => {
    if (listaDeEventos.length === 0) {
        console.log("Nenhum evento encontrado.")
    }
    else
        for (const evento of listaDeEventos) {
            console.log(evento.toJSON());
        }
}).catch((erro) => {
    console.log('Descrição do erro:\n'+erro);
});


