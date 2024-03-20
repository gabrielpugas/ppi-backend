export default class ClienteControle {
    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const titulo = requisicao.titulo;
            const descricao = requisicao.descricao;
            const data = requisicao.data;
            const horario = requisicao.horario;
            const local = requisicao.local;
            const precoIngresso = requisicao.precoIngresso;
            const ingressosDisponiveis = requisicao.ingressosDisponiveis;
            if (titulo && descricao && data && horario && local && precoIngresso && ingressosDisponiveis) {
                const evento = new Evento(0, titulo, descricao, data, horario, local, precoIngresso, ingressosDisponiveis);
                evento.gravar().then((id) => {
                    resposta.status(201).json({
                        status: 'ok',
                        mensagem: 'Registro gravado com sucesso. ID: ' + id;
                    });
                    
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: 'erro',
                        mensagem: 'Erro ao gravar o registro. Consulte API para mais detalhes.'
                    })
                });
            } else {
                resposta.status(400).json({
                    status: 'erro',
                    mensagem: 'Todos os campos devem ser informados. Consulte API para mais detalhes.'
                });
            }

        } else {
            resposta.status(405).json({
                status: 'erro',
                mensagem: 'Requisição inválida. Consulte API para mais detalhes.'
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is('application/json')) {
            const id = requisicao.id;
            const titulo = requisicao.titulo;
            const descricao = requisicao.descricao;
            const data = requisicao.data;
            const horario = requisicao.horario;
            const local = requisicao.local;
            const precoIngresso = requisicao.precoIngresso;
            const ingressosDisponiveis = requisicao.ingressosDisponiveis;
            
        }
    }

    excluir(requisicao, resposta) {

    }

    consultar(requisicao, resposta) { }

}