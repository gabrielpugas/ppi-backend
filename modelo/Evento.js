//Título; descrição; data; horário; local; preço por ingresso; ingressos disponíveis;
import EventoDAO from '../persistencia/EventoDAO.js'
export default class Evento {
    #titulo;
    #descricao;
    #data;
    #horario;
    #local;
    #precoIngresso;
    #ingressosDisponiveis;

    constructor (titulo, descricao, data, horario, local, precoIngresso, ingressosDisponiveis) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.horario = horario;
        this.local = local;
        this.precoIngresso = precoIngresso;
        this.ingressosDisponiveis = ingressosDisponiveis;
    }

    get titulo () {
        return this.#titulo
    }
    set titulo (titulo) {
        this.#titulo = titulo
    }

    get descricao () {
        return this.#descricao
    }
    set descricao (descricao) {
        this.#descricao = descricao
    }

    get data () {
        return this.#data
    }
    set data (data) {
        this.#data = data
    }

    get horario () {
        return this.#horario
    }
    set horario (horario) {
        this.#horario = horario
    }

    get local () {
        return this.#local
    }
    set local (local) {
        this.#local = local
    }

    get precoIngresso () {
        return this.#precoIngresso
    }
    set precoIngresso (precoIngresso) {
        this.#precoIngresso = precoIngresso
    }

    get ingressosDisponiveis () {
        return this.#ingressosDisponiveis
    }
    set ingressosDisponiveis (ingressosDisponiveis) {
        this.#ingressosDisponiveis = ingressosDisponiveis
    }

    async gravar () {
        const dao = new EventoDAO();
        await dao.gravar(this);
    }

    async atualizar () {
        const dao = new EventoDAO();
        await dao.atualizar(this);
    }

    async excluir () {
        const dao = new EventoDAO();
        await dao.excluir(this);
    }

    async consultar () {
        const dao = new EventoDAO();
        return await dao.consultar(termoDePesquisa);
    }

}