import { ADD_GRUPO } from '../actions/actionTypes';
import { REMOVE_GRUPO } from '../actions/actionTypes';

const inicialize = [
	{
		'id': '999999',
		'nome': 'Grupo 25mg',
		'descricao': 'Grupo 25mg',
		'olts': [],
		'clientes': []
	},
	{
		'id': '888888',
		'nome': 'Teste relampago',
		'descricao': 'Grupo 25mg',
		'olts': [],
		'clientes': []
	},
	{
		'id': '000000',
		'nome': 'isso ai',
		'descricao': 'Grupo 25mg',
		'olts': [],
		'clientes': []
	},
	{
		'id': '9632147',
		'nome': 'Evila Maria',
		'descricao': 'Grupo 25mg',
		'olts': [],
		'clientes': []
	}
]
export const grupoReducer = (state = inicialize, action) => {	
  switch (action.type) {
	case 'ADD_GRUPO':
		return [
		 	...state,
		  	{				  
				id: action.id?action.id:''+Math.floor(Math.random() * 256)+'',
				nome: action.nome,
				descricao: action.descricao,
				olts: action.olts,
				clientes: action.clientes
		  	}
		];
  
	  case 'REMOVE_GRUPO':
		return state.filter((grupo) => {
			if (grupo.id === action.id ) {
				return false;
		 	} else {
				return true;
		 	}
		});
    default:
      	return state;
  	}
};