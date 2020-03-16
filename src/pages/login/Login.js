import { addAlert, logIn, logOut } from './../../actions';
// import { addAlert, autentication, preferenceConfig } from './../../actions';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ValidationForm } from './../../components/Validation';
import { IcoEnter, IcoIntelbras } from './../../components/icones';
import { InputLine } from './../../components/form';

import './Login.css';
const inicialize = {
		'id': '999999',
		'nome': 'Nome Sobrenome fake',
		'perfil': 'perfil',
		'foto': 'perfil',
		'preferencia': {'contrast': true}
}
let inputsDefault = {'email': '', 'senha':''};
const Login = (props) =>{
	const {loginAutentication, addAlert, history, logIn, logOut} = props;
	const [inputs, setInputs] = useState(inputsDefault);
	const [validators, setValidators] = useState(false);

	const InputChange = (evt) =>{
		setInputs({...inputs, [evt.target.name]: evt.target.value});
	} 
	// logIn({'id': '', 'nome': '', 'perfil': '', 'foto': '', 'preferencia': {} })

	const EntrarLogin = () =>{
		// if(validators){
		// 	if ( loginAutentication(props, inputs) ){
		// 		props.history.push('/')				
		// 	} else{
		// 		addAlert("E-mail e/ou senha incorreto(s).", "danger")
		// 	}			
		// } else{
		// 	addAlert("Verifique se os campos estão preenchidos corretamente.", "danger")
		// }
		console.log(props);
		logIn(inicialize)
		history.push('/');
		
	} 

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const product = urlParams.get('log')
	if(product === 'out'){
		logOut(inicialize)
		history.push('/login');
	}

	const ValidarCampos = () =>{
        if ( ValidationForm(".box-center-height input") ) {
            setValidators(false)
        } else{
            setValidators(true)
        }
	}

	return (
		<div>
			<div className="box-center-width" style={{maxWidth: '400px'}}>
				<iframe style={{display:'none'}} title="InfoUnredirect" name="InfoUnredirect"></iframe>
		
				<form target="InfoUnredirect" method="POST" className="box-center-height" onChange={ValidarCampos}> 
					<header className="box-header">
						<div className="title-header">
						<h1><IcoIntelbras title="Intelbras" /></h1>
						</div>
						<div className="d">
						</div>
					</header>
					<div className="box-login">
						<div className="content-login">						
							<InputLine
								type="text"
								name="email"
								label="E-mail"
								value={inputs['email']}
								changeInput={(event)=> InputChange(event)}
								required={true}
								validate={true}
							/>
							<InputLine
								type="password"
								name="password"
								label="Senha"
								value={inputs['password']}
								changeInput={(event)=> InputChange(event)}
								required={true}
								validate={true}
							/>
						</div>				
						<button type="button" className="btn-success cal-100" onClick={(event) => EntrarLogin()} >Entrar</button>
						<button type="button" className="btn-link link-custom-login" onClick={() => props.history.push('/cadastro?passo=1')} >Criar Perfil</button>
						<button type="button" className="btn-link link-custom-login right" onClick={() => props.history.push('/relembrar-senha')} >Esqueci a Senha</button>
					</div>
				</form>
			</div> 
		 </div>	
	);
	
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, logIn, logOut }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
