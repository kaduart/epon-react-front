import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ValidationForm, passwordConfirm } from './../../components/Validation';
import { modifyPassword } from '../../services/services';
import { addAlert } from './../../actions';
import { IcoSend, IcoCross } from '../../components/icones';

import './Login.css';
import { PublicRoute } from '../../router';

const inputsDefault = {'senha':'', 'senhaConfirma':''};
const validatorsSenhaDefault = {"0": "Sua senha deve conter mínimo 6 caracteres.", "1": ""};

function Restaurar(props){
	PublicRoute(props.history, '/')
	const [inputs, setInputs] = useState(inputsDefault);
	const [validators, setValidators] = useState(false);
	const [validatorsSenha, setValidatorsSenha] = useState(validatorsSenhaDefault);
	const InputChange = (evt) =>{
		evt.persist();
		setInputs({...inputs, [evt.target.name]: evt.target.value});
	}
	
	const RestaurarSenha = (evt) =>{
		if (validators) {			
			const confirmpassword = passwordConfirm([inputs.senha, inputs.senhaConfirma]);
			setValidatorsSenha( confirmpassword )
			
			if( !confirmpassword[0] && !confirmpassword[1] ){
                if ( modifyPassword(inputs, props.location.search) ) {
                    props.addAlert("Senha modificada com sucesso", "success")                    
                    props.history.push('/login')
                } else{
                    props.addAlert("Link expirado, tente reenviar e-mail para restaurar.", "error")
                    props.history.push('/relembrar-senha')
                }
			} else{
				props.addAlert("Verifique se os campos estão preenchidos corretamente.", "error")
			}	
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
		<div>
			<div className="box-center-width" style={{maxWidth: '500px'}}>
				<iframe style={{display:'none'}} title="InfoUnredirect" name="InfoUnredirect"></iframe>
		
				<form target="InfoUnredirect" method="POST" className="box-center-height" onChange={ValidarCampos}> 
					<h4 className="titulo">Restaurar Acesso</h4>
					<div className="row">				     
						<div className="col-md-12"> 
							<div className="form-group">
								<input type="password" className="form-control" name="senha" placeholder="Senha" value={inputs.senha} onChange={InputChange} required />
							</div>
						</div>  
						<div className="col-md-12"> 
							<div className="form-group">
								<input type="password" className="form-control" name="senhaConfirma" placeholder="Confirmar Senha" value={inputs.senhaConfirma} onChange={InputChange} required />
							</div>
						</div>
						<div className="col-md-12"> 
							{
								(validatorsSenha[0])?
								<small className="text-warning" style={{display: "block"}}>{validatorsSenha[0]}</small>
								:null
							}
							{
								(validatorsSenha[1])?
								<small className="text-warning" style={{display: "block"}}>{validatorsSenha[1]}</small>
								:null
							}
						</div>
					</div>
					<div className="row box-btn">
						<div className="col-md-12">
							<hr />
						</div> 
						<div className="col-md-6 col-sm-6">
							<button className="btn-default cal-100" onClick={() => props.history.push('/login')} ><IcoCross style={{fontSize: '13px'}} /> Cancelar </button>
						</div>
						<div className="col-md-6 col-sm-6">
							<button className="btn-primary cal-100" onClick={() => RestaurarSenha()} ><IcoSend style={{fontSize: '13px'}} /> Restaurar senha </button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Restaurar);