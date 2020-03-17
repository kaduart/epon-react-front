import React, { useState } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './../login/Login.css';
import { InputLine, InputInbox } from '../../components/form';

const inputsDefault = {'senha': '', 'senhaConfirmar':''};

const DadosSenha = (props) => {
	const {cadastrando, guardarCadastro, info} = props;
	const [inputs, setInputs] = useState(inputsDefault);

	const changeInput = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
    } 
	const guardarInfo = function (evt) {
		guardarCadastro({...cadastrando,'passo3': inputs})
		info.history.push('/cadastro?passo=4');
	}
	
    return (
		<div className="box-dados">
			<div className="row">     
				<div className="col-md-12">
					<h5 className="titulo">Crie uma senha!</h5>
				</div>
			</div>
			<div className="row">				
				<div className="col-md-12">
					<InputInbox
						type="password"
						name="senha"
						label="Senha"
						value={inputs['senha']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-12">
					<InputInbox
						type="password"
						name="senhaConfirmar"
						label="Confirmar Senha"
						value={inputs['senhaConfirmar']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
			</div>
			<div className="row box-btn">
				<div className="col-md-6 col-sm-6">
					<button type="button" className="btn-secondary btn-block" onClick={()=> info.history.push('/login')}> Cancelar </button>
				</div>
				<div className="col-md-6 col-sm-6">
					<button type="button" className="btn-success btn-block" onClick={()=> guardarInfo()}> Próximo </button>
				</div>
			</div>
		</div>
	);
	
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		cadastrando: store.information.cadastro
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, guardarCadastro }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(DadosSenha);
