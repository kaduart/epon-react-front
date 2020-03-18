import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAlert } from './../../actions';
// import { remakePassword } from '../../services/services';
import { ValidationForm } from './../../components/Validation';

import './Login.css';
import { InputLine, InputInbox } from '../../components/form';
import { IcoIntelbras } from '../../components/icones';

const inputsDefault = {'email': ''};
const Esqueci = (props) => {
	const [inputs, setInputs] = useState(inputsDefault);
	const [validators, setValidators] = useState(false);
	const InputChange = (evt) =>{
		evt.persist();
		setInputs({...inputs, [evt.target.name]: evt.target.value});

		if ( ValidationForm(".box-center-height input") ) {
            setValidators(false)
        } else{
            setValidators(true)
        }
	} 
	
	const RestaurarLogin = (evt) =>{
		if (validators) {
			props.addAlert("Enviaremos um e-mail para restaur sua senha.", "info")
			props.history.push('/login')
		// 	if ( remakePassword(inputs.email) ) {
		// 		props.addAlert("Enviaremos um e-mail para restaur sua senha.", "info")
		// 		props.history.push('/login')
		// 	} else {
		// 		props.addAlert("Este e-mail não existe em nossa base.", "info")
		// 	}
		}
	}
	
	const ValidarCampos = () =>{
        if ( ValidationForm(".box-center-height input") ) {
            setValidators(false)
        } else{
            setValidators(true)
        }
	}

	return (
		<div className="box-center-page">
			<div className="box-center" style={{maxWidth: '400px'}}>            
				<iframe style={{display:'none'}} title="InfoUnredirect" name="InfoUnredirect"></iframe>

				<form target="InfoUnredirect" method="POST" className="box-center-height"  onChange={ValidarCampos} >			
					<header className="box-header">
						<div className="title-header">
						<h1><IcoIntelbras title="Intelbras" /></h1>
						</div>
						<div className="d">
						</div>
					</header>
					<div className="box-center-content">
						<div className="row">     
							<div className="col-md-12">
								<h5 className="titulo">Relembrar senha!</h5>
							</div>
						</div>
						<div className="content-login">						
							<InputInbox
								type="email"
								name="email"
								label="E-mail"
								value={inputs['email']}
								changeInput={(event)=> InputChange(event)}
								required={true}
								validate={true}
							/>
						</div>				
						<div className="row box-btn"> 
							<div className="col-md-6 col-sm-6">
								<button type="button" className="btn-secondary cal-100" onClick={() => props.history.push('/login')} > Cancelar </button>
							</div>
							<div className="col-md-6 col-sm-6">
								<button className="btn-success cal-100" onClick={RestaurarLogin} > Confirmar </button>
							</div>
						</div> 
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
  bindActionCreators({ addAlert }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Esqueci);
