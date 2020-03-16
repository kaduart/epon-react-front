import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { Store } from './store';
import { ProtectedRoute } from './router';
import './index.css';

import App from './App.js';

ReactDOM.render(  
	<Provider store={Store}>
		<Router>
			<App />
		</Router>
	</Provider>
	 
	, document.getElementById('root'));

serviceWorker.unregister();
