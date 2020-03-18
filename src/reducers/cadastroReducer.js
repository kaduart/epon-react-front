import { ADD_GRUPO } from '../actions/actionTypes';
import { REMOVE_GRUPO } from '../actions/actionTypes';

const inicialize = [
	{
		'id': '1',
		'nome': 'nome sobrenome',
		'descricao': 'descrição',
		'olts': [],
		'clientes': []
	}
]
export const cadastroReducer = (state = inicialize, action) => {	
  switch (action.type) {
	case 'ADD_CADASTRO':
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
  
	  case 'REMOVE_CADASTRO':
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