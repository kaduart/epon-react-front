import React, { useState } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './../login/Login.css';
import { InputInboxSee } from '../../components/form';

const inputsDefault = {
	'passo1':{'nome': '', 'sobrenome':'', 'email':'', 'emailAlternativo':''},
	'passo2':{'telefone': '', 'cep':'', 'cidade':'', 'uf':''}
};

const BoxPasso1 = (props) => {
	const {cadastrando} = props;
	const Passo1 = cadastrando.passo1?cadastrando.passo1:inputsDefault.passo1;
	return(
		<div className="row">   
			<div className="col-md-12">
				<InputInboxSee
					label="Nome Sobrenome"
					value={Passo1.nome + ' ' +Passo1.sobrenome}
				/>
			</div>			
			<div className="col-md-12">
				<InputInboxSee
					label="E-mail"
					value={Passo1.email}
				/>
			</div>			
			<div className="col-md-12">
				<InputInboxSee
					label="E-mail alternativo"
					value={Passo1.emailAlternativo}
				/>
			</div>
		</div>
	)
}
const BoxPasso2 = (props) => {
	const {cadastrando} = props;
	const Passo2 = cadastrando.passo2?cadastrando.passo2:inputsDefault.passo2;
	return(
		<div className="row">   
			<div className="col-md-6">
				<InputInboxSee
					label="Telefone"
					value={Passo2.telefone}
				/>
			</div>			
			<div className="col-md-12">
				<InputInboxSee
					label="Cep / Cidade / UF"
					value={Passo2.cep + ' - ' + Passo2.cidade + ' - ' + Passo2.uf}
				/>
			</div>			
			<div className="col-md-12">
				{/* <InputInboxSee
					label="Perfil"
					value={Passo2.perfil}
				/> */}
			</div>
		</div>
	)
}

const DadosConfirmar = (props) => {
	const {cadastrando, guardarCadastro, info} = props;
	const guardarInfo = function (evt) {
		info.history.push('/login');
	}
	
    return (
		<div className="box-dados">
			<div className="row">     
				<div className="col-md-12">
					<h5 className="titulo">Verifique seus dados!</h5>
				</div>
			</div>
			<BoxPasso1 cadastrando={cadastrando} />
			<BoxPasso2 cadastrando={cadastrando} />
			<div className="row box-btn">
				<div className="col-md-6 col-sm-6">
					<button type="button" className="btn-secondary btn-block" onClick={()=> info.history.push('/login')}> Cancelar </button>
				</div>
				<div className="col-md-6 col-sm-6">
					<button type="button" className="btn-success btn-block" onClick={()=> guardarInfo()}> Criar </button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(DadosConfirmar);
