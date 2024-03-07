import conectar from "./Conexao.js";
import Evento from "../modelo/Evento.js";

export default class ClienteDao {
    async gravar (evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql =`insert into eventos (titulo,descricao, data, horario, local, precoIngresso, ingressosDisponiveis)
                        values (?, ?, ?, ?, ?, ?, ?)`;
           
            const parametros = [
                evento.titulo,
                evento.descricao,
                evento.data,
                evento.horario,
                evento.local,
                evento.precoIngresso,
                evento.ingressosDisponiveis
            ];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            evento.id = resultados.insertId;
        }
    }

    async atualizar (evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql =`update eventos set titulo = ?, descricao = ?, data = ?, horario = ?, local = ?, precoIngresso = ?, ingressosDisponiveis = ? where id = ?`;
        
            const parametros = [
                evento.titulo,
                evento.descricao,
                evento.data,
                evento.horario,
                evento.local,
                evento.precoIngresso,
                evento.ingressosDisponiveis,
                evento.id
            ];

            await conexao.execute(sql, parametros);
        }
        
    }

    async excluir (evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql =`delete from eventos where id = ?`;
            const parametros = [
                evento.id
            ];
            await conexao.execute(sql, parametros);
        }
    }

     async consultar (termoDePesquisa) {
        if (termoDePesquisa === undefined) {
            termoDePesquisa = '';
        }
        let sql = '';
        if (isNaN(termoDePesquisa)) {
            sql = `select * from eventos where titulo like ?`;
            termoDePesquisa = '%' + termoDePesquisa + '%';
        }
        else {
            sql = `select * from eventos where id = ?`;
                    
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [termoDePesquisa]);

        let listaDeEventos = [];

        for (const registro of registros) {
            const evento = new Evento(
                registro.id,
                registro.titulo,
                registro.descricao,
                registro.data,
                registro.horario,
                registro.local,
                registro.precoIngresso,
                registro.ingressosDisponiveis
            );
            listaDeEventos.push(evento);
        }
        return listaDeEventos;        
    }
}
