import { LOADING } from '../actions/actionTypes';

export const loadReducer = (state = {}, action) => {	
	switch (action.type) {  
	  case 'LOADING':
		return {
			text: action.text,
			load: action.load
		};
  
	  default:
		return state;
	}
};