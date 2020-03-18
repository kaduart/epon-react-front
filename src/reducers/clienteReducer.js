import { ADD_CLIENTE } from '../actions/actionTypes';
import { SERVICE_CLIENTE } from '../actions/actionTypes';
import { REMOVE_CLIENTE } from '../actions/actionTypes';
const inicialize = [
	{
		'nContrato': '012345a',
		'nome': 'Nome Sobrenome 1',
		'descricao': 'Descrição 1',
		'grupo': '',
		'serial': '789963',
		'internet': false,
		'velocidade': '10',
		'entregue': '5',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'', 'text': ''},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '888888',
		'nome': 'Nome Sobrenome 2',
		'descricao': 'Descrição 2',
		'grupo': '',
		'serial': '987741',
		'internet': true,
		'velocidade': '0',
		'entregue': '',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'warning', 'text': 'Mensagem de observação!'},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '000000',
		'nome': 'Nome Sobrenome 3',
		'descricao': 'Descrição 3',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Mensagem de erro'},
		'telefoneStatus': {'type':'success', 'text': 'Mensagem de sucesso!'}
	},
	{
		'nContrato': '9632147',
		'nome': 'Nome Sobrenome 4',
		'descricao': 'Descrição 4',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '10',
		'entregue': '100',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'success', 'text': 'Tudo ok!'},
		'telefoneStatus': {'type':'danger', 'text': 'Telefone com problema'}
	},
	{
		'nContrato': '999999g',
		'nome': 'Nome Sobrenome 5',
		'descricao': 'Descrição 5',
		'grupo': '',
		'serial': '789963',
		'internet': false,
		'velocidade': '10',
		'entregue': '5',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'', 'text': ''},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '888888d',
		'nome': 'Nome Sobrenome 6',
		'descricao': 'Descrição 6',
		'grupo': '',
		'serial': '987741',
		'internet': true,
		'velocidade': '0',
		'entregue': '',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'warning', 'text': 'Instavel!'},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '000000r',
		'nome': 'Nome Sobrenome 7',
		'descricao': 'Descrição 7',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Problema'},
		'telefoneStatus': {'type':'success', 'text': 'Tudo ok!'}
	},
	{
		'nContrato': '9632147s',
		'nome': 'Nome Sobrenome 8',
		'descricao': 'Descrição 8',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '10',
		'entregue': '100',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'success', 'text': 'Tudo ok!'},
		'telefoneStatus': {'type':'danger', 'text': 'Telefone com problem'}
	},
	{
		'nContrato': '000000rf',
		'nome': 'Nome Sobrenome 9',
		'descricao': 'Descrição 9',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Errado'},
		'telefoneStatus': {'type':'success', 'text': 'Tudo ok!'}
	},
	{
		'nContrato': '9632147sf',
		'nome': 'Nome Sobrenome 10',
		'descricao': 'Descrição 10',
		'grupo': '',
		'serial': '123982',
		'internet': true,
		'velocidade': '10',
		'entregue': '100',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'success', 'text': 'Tudo ok!'},
		'telefoneStatus': {'type':'danger', 'text': 'Telefone com problem'}
	}

]
export const clienteReducer = (state = inicialize, action) => {	
  switch (action.type) {
	case 'ADD_CLIENTE':
		return [
		 	...state,
		  	{				  
				nContrato: (action.nContrato == '')?''+Math.floor((Math.random() * 256) + 100000)+'':action.nContrato,
				nome: action.nome,
				descricao: action.descricao,
				internet: action.internet,
				velocidade: action.velocidade,
				entregue: action.entregue?action.entregue:Math.floor(Math.random() * 256),
				serial: action.serial,
				telefone: action.telefone,
				nTelefone: action.nTelefone,
				telefoneStatus: action.telefoneStatus,
				internetStatus: action.internetStatus
		  	}
		];
	case 'SERVICE_CLIENTE':
		return [
		 	...state,
		  	{				  
				nContrato: action.nContrato,
				internet: action.internet,
				velocidade: action.velocidade,
				serial: action.serial,
				telefone: action.telefone,
				nTelefone: action.nTelefone
		  	}
		];
  
	  case 'REMOVE_CLIENTE':
		return state.filter((cliente) => {
			if (cliente.nContrato === action.nContrato ) {
				return false;
		 	} else {
				return true;
		 	}
		});
    default:
      	return state;
  	}
};