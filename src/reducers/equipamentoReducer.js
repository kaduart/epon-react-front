import { ADD_EQUIPAMENTO } from '../actions/actionTypes';
import { SERVICE_EQUIPAMENTO } from '../actions/actionTypes';
import { REMOVE_EQUIPAMENTO } from '../actions/actionTypes';
const inicialize = [
	{
		'id': '1',
		'nome': 'Equipamento 1',
		'ip': '999.999.999.999',
		'porta': '9999',
		'usuario': "usuario1",
		'senha': 'usuario1'
	},
	{
		'id': '2',
		'nome': 'Equipamento 2',
		'ip': '555.999.999.000',
		'porta': '5555',
		'usuario': "usuario2",
		'senha': 'usuario2'
	},
	{
		'id': '3',
		'nome': 'Equipamento 3',
		'ip': '999.777.999.000',
		'porta': '9999',
		'usuario': "usuario3",
		'senha': 'usuario3'
	},
	{
		'id': '4',
		'nome': 'Equipamento 4',
		'ip': '123.456.789.999',
		'porta': '9999',
		'usuario': "usuario4",
		'senha': 'usuario4'
	}
]

export const equipamentoReducer = (state = inicialize, action) => {	
  switch (action.type) {
	case 'ADD_EQUIPAMENTO':
		return [
		 	...state,
		  	{				  
				id: action.id?action.id:Math.floor(Math.random() * 256),
				nome: action.nome,
				ip: action.ip,
				porta: action.porta,
				ususario: action.ususario,
				senha: action.senha
		  	}
		];
	case 'SERVICE_EQUIPAMENTO':
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
  
	  case 'REMOVE_EQUIPAMENTO':
		return state.filter((equipamento) => {
			if (equipamento.id === action.id ) {
				return false;
		 	} else {
				return true;
		 	}
		});
    default:
      	return state;
  	}
};