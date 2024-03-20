export default class ClienteControle {
    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const titulo = requisicao.body.titulo;
            const descricao = requisicao.body.descricao;
            const data = requisicao.body.data;
            const horario = requisicao.body.horario;
            const local = requisicao.body.local;
            const precoIngresso = requisicao.body.precoIngresso;
            const ingressosDisponiveis = requisicao.body.ingressosDisponiveis;
            if (titulo && descricao && data && horario && local && precoIngresso && ingressosDisponiveis) {
                const evento = new Evento(0, titulo, descricao, data, horario, local, precoIngresso, ingressosDisponiveis);
                evento.gravar().then((id) => {
                    resposta.status(201).json({
                        "status": 'ok',
                        "mensagem": 'Registro gravado com sucesso. ID: ' + id
                    });

                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": 'erro',
                        "mensagem": 'Erro ao gravar o registro. Consulte API para mais detalhes.'
                    })
                });
            } else {
                resposta.status(400).json({
                    "status": 'erro',
                    "mensagem": 'Todos os campos devem ser informados. Consulte API para mais detalhes.'
                });
            }

        } else {
            resposta.status(405).json({
                "status": 'erro',
                "mensagem": 'Requisição inválida. Consulte API para mais detalhes.'
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is('application/json')) {
            const id = requisicao.params.id;
            const titulo = requisicao.body.titulo;
            const descricao = requisicao.body.descricao;
            const data = requisicao.body.data;
            const horario = requisicao.body.horario;
            const local = requisicao.body.local;
            const precoIngresso = requisicao.body.precoIngresso;
            const ingressosDisponiveis = requisicao.body.ingressosDisponiveis;
            if (id > 0 && titulo && descricao && data && horario && local && precoIngresso && ingressosDisponiveis) {
                const evento = new Evento(id, titulo, descricao, data, horario, local, precoIngresso, ingressosDisponiveis);
                evento.atualizar().then(() => {
                    resposta.status(200).json({
                        "status": 'ok',
                        "mensagem": 'Evento atualizado com sucesso.'
                    });

                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": 'erro',
                        "mensagem": 'Erro ao atualizar o registro. Consulte API para mais detalhes.'
                    })
                });
            } else {
                resposta.status(400).json({
                    "status": 'erro',
                    "mensagem": 'Todos os campos devem ser informados. Consulte API para mais detalhes.'
                });
            }
        } else {
            resposta.status(405).json({
                "status": 'erro',
                "mensagem": 'Requisição inválida. Consulte API para mais detalhes.'
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'DELETE') {
            const id = requisicao.params.id;
            if (id && id > 0) {
                const evento = new Evento(id);
                evento.excluir().then(() => {
                    resposta.status(200).json({
                        "status": 'ok',
                        "mensagem": 'Registro excluído com sucesso.'
                    });

                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": 'erro',
                        "mensagem": 'Erro ao excluir o registro. Consulte API para mais detalhes.'
                    })
                });
            } else {
                resposta.status(400).json({
                    "status": 'erro',
                    "mensagem": 'Parâmetros inválidos. Consulte API para mais detalhes.'
                });
            }
        } else {
            resposta.status(405).json({
                "status": 'erro',
                "mensagem": 'Requisição inválida. Consulte API para mais detalhes.'
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === "GET") {
            const termoDePesquisa = requisicao.params.termoDePesquisa;
            const evento = Evento(0);
            evento.consultar(termoDePesquisa).then((eventos) => {
                resposta.status(200).json(eventos);
            }).catch((erro) => {
                resposta.status(500).json({
                    "status": 'erro',
                    "mensagem": 'Erro ao consultar o registro. Consulte API para mais detalhes.'
                })
            });
        } else {
            resposta.status(405).json({
                "status": 'erro',
                "mensagem": 'Requisição inválida. Consulte API para mais detalhes.'
            });
        }

    }

}