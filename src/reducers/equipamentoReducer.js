import { ADD_EQUIPAMENTO } from '../actions/actionTypes';
import { SERVICE_EQUIPAMENTO } from '../actions/actionTypes';
import { REMOVE_EQUIPAMENTO } from '../actions/actionTypes';
const inicialize = [
	{
		'id': '999999',
		'nome': 'OLt 4587',
		'ip': '999.999.999.999',
		'porta': '9999',
		'usuario': "eumesmo",
		'senha': '0'
	},
	{
		'id': '888888',
		'nome': 'olt asdfghjkl',
		'ip': '666.666.666.666',
		'porta': '8524',
		'usuario': 'true',
		'senha': '0'
	},
	{
		'id': '000000',
		'nome': 'olt Joaquina',
		'ip': '777.854.784.111',
		'porta': '0142',
		'usuario': 'true',
		'senha': '0'
	},
	{
		'id': '9632147',
		'nome': 'olt Evila Maria',
		'ip': '101.110.210.354',
		'porta': '8000',
		'usuario': true,
		'senha': '0'
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