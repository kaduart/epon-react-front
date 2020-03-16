import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import Home from './pages/home/Home.js';
import Login from './pages/login/Login';
import Esqueci from './pages/login/Esqueci';
import Cadastro from './pages/usuario/Cadastro';
import Clientes from './pages/clientes/Clientes';
import Equipamentos from './pages/equipamentos/Equipamentos';
import Grupos from './pages/grupos/Grupos';

export const ProtectedRoute =()=>{
	return(
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/login" exact={true} component={Login} />
			<Route path="/relembrar-senha" exact={true} component={Esqueci} />
			<Route path="/cadastro" exact={true} component={Cadastro} />
			<Route path="/clientes" exact={true} component={Clientes} />
			<Route path="/equipamentos" exact={true} component={Equipamentos} />
			<Route path="/grupos" exact={true} component={Grupos} />
		</Switch>
	)	
}