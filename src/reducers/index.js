import { clickReducer } from './clickReducer';
import { alertsReducer } from './alertsReducer';
import { clienteReducer } from './clienteReducer';
import { grupoReducer } from './grupoReducer';
import { equipamentoReducer } from './equipamentoReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';
  
export const Reducers = combineReducers({
	information: clickReducer,
	alerts: alertsReducer,
	equipamentos: equipamentoReducer,
	clientes: clienteReducer,
	grupos: grupoReducer,
	user: userReducer,
});

export default Reducers; 