import { ADD_ALERT } from '../actions/actionTypes';
import { REMOVE_ALERT } from '../actions/actionTypes';

export const alertsReducer = (state = [], action) => {	
	switch (action.type) {  
	  case 'ADD_ALERT':
		return [
		 	...state,
		  	{
				text: action.text,
				style: action.style,
				id: Math.floor(Math.random() * 256)
		  	}
		];
  
	  case 'REMOVE_ALERT':
		return state.filter((alert) => {
			if (alert.id === Number(action.id) ) {
				return false;
		 	} else {
				return true;
		 	}
		});
  
	  default:
		return state;
	}
};