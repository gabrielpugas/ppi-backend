import {Router} from 'express';
import EventoControle from '../controles/eventoControle.js';

const rotaEvento = new Router();
const eventoControle = new EventoControle();

rotaEvento
.get('/' , eventoControle.consultar)
.get('/:termoDePesquisa', eventoControle.consultar)
.post('/', eventoControle.gravar)
.patch('/:id', eventoControle.atualizar)
.put('/:id', eventoControle.atualizar)
.delete('/:id', eventoControle.excluir);

export default rotaEvento;