import { LOGIN_USER } from '../actions/actionTypes';
import { LOGOUT_USER } from '../actions/actionTypes';

const inicialize = {
		'id': '1',
		'nome': 'Nome Sobrenome',
		'perfil': 'perfil',
		'foto': 'perfil',
		'preferencia': {'contrast': true}
}
const inicializenone = {'preferencia': {'contrast': true}};
export const userReducer = (state = inicialize, action) => {
		
  switch (action.type) {
	case 'LOGIN_USER':
		return {				  
				id: ''+ Math.floor(Math.random() * 256) +'',
				nome: action.nome,
				perfil: action.perfil,
				preferencia: action.preferencia
		  	};
  
	  case 'LOGOUT_USER':
		return {				  
			id: '',
			nome: action.nome,
			perfil: action.perfil,
			preferencia: action.preferencia
		  };

		// return state.filter((grupo) => {
		// 	if (grupo.id === action.id ) {
		// 		return false;
		//  	} else {
		// 		return true;
		//  	}
		// });
    default:
      	return state;
  	}
};