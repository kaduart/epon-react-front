import React, { useState, useEffect } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './../login/Login.css';
import { InputLine, InputInbox } from '../../components/form';

const inputsDefault = {'nome': '', 'sobrenome':'', 'email':'', 'emailConfirme':'', 'emailAlternativo':''};

const DadosPessoais = (props) => {
	const {cadastrando, guardarCadastro, info} = props;
	const [inputs, setInputs] = useState(inputsDefault);

	useEffect(()=>{
		if (cadastrando.passo1) {
			setInputs(cadastrando.passo1)
		}
	},[])
	
	const changeInput = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
    } 
	const guardarInfo = function (evt) {
		guardarCadastro({...cadastrando,'passo1': inputs})
		info.history.push('/cadastro?passo=2');
	}
	
    return (
		<div className="box-dados">
			<div className="row">     
				<div className="col-md-12">
					<h5 className="titulo">Crie uma conta!</h5>
				</div>
			</div>
			<div className="row">     
				<div className="col-md-12">
					<InputInbox
						type="text"
						name="nome"
						label="Nome"
						value={inputs['nome']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-12">
					<InputInbox
						type="text"
						name="sobrenome"
						label="Sobrenome"
						value={inputs['sobrenome']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-12">
					<InputInbox
						type="email"
						name="email"
						label="E-mail"
						value={inputs['email']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				{/* <div className="col-md-12">
					<InputInbox
						type="email"
						name="emailConfirme"
						label="confirme E-mail"
						value={inputs['emailConfirme']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div> */}
				<div className="col-md-12">
					<InputInbox
						type="email"
						name="emailAlternativo"
						label="E-mail alternativo"
						value={inputs['emailAlternativo']}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais);
