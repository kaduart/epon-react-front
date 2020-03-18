import { ADD_GRUPO } from '../actions/actionTypes';
import { REMOVE_GRUPO } from '../actions/actionTypes';

const inicialize = [
	{
		'id': '1',
		'nome': 'Grupo 1',
		'descricao': 'Descrição grupo 1',
		'olts': [],
		'clientes': []
	},
	{
		'id': '2',
		'nome': 'Grupo 2',
		'descricao': 'Descrição grupo 2',
		'olts': [],
		'clientes': []
	},
	{
		'id': '3',
		'nome': 'Grupo 3',
		'descricao': 'Descrição grupo 3',
		'olts': [],
		'clientes': []
	},
	{
		'id': '4',
		'nome': 'Grupo 4',
		'descricao': 'Descrição grupo 4',
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