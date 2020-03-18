import { ADD_CLIENTE } from '../actions/actionTypes';
import { SERVICE_CLIENTE } from '../actions/actionTypes';
import { REMOVE_CLIENTE } from '../actions/actionTypes';
const inicialize = [
	{
		'nContrato': '999999',
		'nome': 'Davi Ribeiro macedo',
		'descricao': 'se eu quiser',
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
		'nome': 'Cecilia Marques Fernandes',
		'descricao': 'endereçço',
		'serial': '987741',
		'internet': true,
		'velocidade': '0',
		'entregue': '',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'warning', 'text': 'esta tudo instavel!'},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '000000',
		'nome': 'Joaquina Souza Silva de Moraes',
		'descricao': 'lorotas',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Tudo errado'},
		'telefoneStatus': {'type':'success', 'text': 'Tudo ok!'}
	},
	{
		'nContrato': '9632147',
		'nome': 'Evila Maria',
		'descricao': 'lorotas',
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
		'nContrato': '999999g',
		'nome': 'Davi Ribeiro macedo',
		'descricao': 'se eu quiser',
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
		'nome': 'Cecilia Marques Fernandes',
		'descricao': 'endereçço',
		'serial': '987741',
		'internet': true,
		'velocidade': '0',
		'entregue': '',
		'telefone': false,
		'nTelefone': '',
		'internetStatus': {'type':'warning', 'text': 'esta tudo instavel!'},
		'telefoneStatus': {'type':'', 'text': ''}
	},
	{
		'nContrato': '000000r',
		'nome': 'Joaquina Souza Silva de Moraes',
		'descricao': 'lorotas',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Tudo errado'},
		'telefoneStatus': {'type':'success', 'text': 'Tudo ok!'}
	},
	{
		'nContrato': '9632147s',
		'nome': 'Evila Maria',
		'descricao': 'lorotas',
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
		'nome': 'Joaquina Souza Silva de Moraes',
		'descricao': 'lorotas',
		'serial': '123982',
		'internet': true,
		'velocidade': '150',
		'entregue': '30',
		'telefone': true,
		'nTelefone': '',
		'internetStatus': {'type':'danger', 'text': 'Tudo errado'},
		'telefoneStatus': {'type':'success', 'text': 'Tudo ok!'}
	},
	{
		'nContrato': '9632147sf',
		'nome': 'Evila Maria',
		'descricao': 'lorotas',
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
				nContrato: action.nContrato,
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