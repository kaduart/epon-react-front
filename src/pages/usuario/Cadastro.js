import { addAlert } from '../../actions';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { passwordConfirm, ValidationForm } from '../../components/Validation';
import { MaskItem } from './../../components/Mask';
import { IcoCross, IcoIntelbras } from '../../components/icones';

import './../login/Login.css';
import { InputLine } from '../../components/form';
import PassoaPasso from './PassoaPasso';
import DadosPessoais from './DadosPessoais';
import DadosComplementares from './DadosComplementares';
import DadosSenha from './DadosSenha';
import DadosConfirmar from './DadosConfirmar';

const inputsDefault = {'nome': '', 'email':'', 'telefone':'', 'nascimento':'', 'senha':'', 'senhaConfirma':''};
const validatorsSenhaDefault = {"0": "Sua senha deve conter mínimo 6 caracteres.", "1": ""};

const CriarPerfil = (props) => {
	const [inputs, setInputs] = useState(inputsDefault);
	const [passo, setPasso] = useState(1);
	const [validators, setValidators] = useState(false);
	const [validatorsSenha, setValidatorsSenha] = useState(validatorsSenhaDefault);
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const product = urlParams.get('passo')

	const InputChange = function (evt) {        
        evt.persist();
        if( Object.prototype.hasOwnProperty.call([evt.target.attributes][0], 'mask') ){
            let mascara = [evt.target.attributes][0]["mask"].value;
            let value = evt.target.value;
            
            setInputs({...inputs, [evt.target.name]: MaskItem( [ mascara, value ] )});
        } else{
		    setInputs({...inputs, [evt.target.name]: evt.target.value});
        }		
	} 
	
	const changePasso = function (evt) {        
        console.log(evt, 'changePasso');
		setPasso(evt);			
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
			<div className="box-center" style={{maxWidth: '500px'}}>
				{/* <input type="hidden" style={{display:'none'}} name="InfoUnredirect" /> */}
				<iframe style={{display:'none'}} title="InfoUnredirect" name="InfoUnredirect"></iframe>

				<form target="InfoUnredirect" method="POST" className="box-center-height" onChange={ValidarCampos}>
					<header className="box-header">
						<div className="title-header">
							<h1><IcoIntelbras title="Intelbras" /></h1>
						</div>
						<div className="d">
						</div>
					</header>
					<div className="box-center-content">
						<PassoaPasso info={props} />
						{
							(Number(product) === 1)?
							<DadosPessoais info={props} />
							:null
						}
						{
							(Number(product) === 2)?
							<DadosComplementares info={props} />
							:null
						}
						{
							(Number(product) === 3)?
							<DadosSenha info={props} />
							:null
						}
						{
							(Number(product) === 4)?
							<DadosConfirmar info={props} />
							:null
						}
					</div>
				</form>
			</div>
		</div>
	);
	
}

const mapStateToProps = store => {
	console.log(store);
	
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CriarPerfil);
