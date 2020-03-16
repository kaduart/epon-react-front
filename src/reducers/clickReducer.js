import { CADASTRO_CREATE } from '../actions/actionTypes';
import { SEARCH_RESULT } from '../actions/actionTypes';
import { SEARCH_RESULT_CLIENTE } from '../actions/actionTypes';
import { SEARCH_RESULT_EQUIPAMENTO } from '../actions/actionTypes';
import { SEARCH_RESULT_GRUPO } from '../actions/actionTypes';

const initialState = {
	result:[],
	cadastro:{},
	clientes:[],
	equipamentos:[],
	grupos:[]
};
export const clickReducer = (state = initialState, action) => {
	
  switch (action.type) {
	case 'CADASTRO_CREATE':
	return {
		...state,
		cadastro: action.cadastro
	};
	case 'SEARCH_RESULT':
	return {
		...state,
		result: action.result
	};
	case 'SEARCH_RESULT_CLIENTE':
	return {
		...state,
		clientes: action.clientes
	};
	case 'SEARCH_RESULT_EQUIPAMENTO':
	return {
		...state,
		equipamentos: action.equipamentos
	};	
	case 'SEARCH_RESULT_GRUPO':
	return {
		...state,
		grupos: action.grupos
	};
    default:
      	return state;
  	}
};