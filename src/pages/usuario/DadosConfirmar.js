import React, { useState } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Login.css';
import { InputLine } from '../../components/form';

const inputsDefault = {'nome': '', 'sobrenome':'', 'email':'', 'emailConfirme':'', 'emailAlternativo':''};

const BoxPasso1 = (props) => {
	const {cadastrando} = props;
	const Passo1 = cadastrando.passo1;
	return(
		<div className="row">   
			<div className="col-md-12">
				<small>Nome Sobrenome</small>
				<p><strong>{Passo1?Passo1.nome:''} {Passo1?Passo1.sobrenome:''}</strong></p>
			</div>			
			<div className="col-md-12">
				<small>E-mail</small>
				<p><strong>{Passo1?Passo1.email:''}</strong></p>
			</div>			
			<div className="col-md-12">
				<small>E-mail alternativo</small>
				<p><strong>{Passo1?Passo1.emailAlternativo:''}</strong></p>
			</div>
		</div>
	)
}
const BoxPasso2 = (props) => {
	const {cadastrando} = props;
	const Passo2 = cadastrando.passo2;
	return(
		<div className="row">   
			<div className="col-md-6">
				<small>Telefone</small>
				<p><strong>{Passo2?Passo2.telefone:''}</strong></p>
			</div>			
			<div className="col-md-12">
				<small>Cep/Cidade/UF</small>
				<p><strong>{Passo2?Passo2.cep:''} - {Passo2?Passo2.cidade:''} - {Passo2?Passo2.uf:''}</strong></p>
			</div>			
			<div className="col-md-12">
				<small>Perfil</small>
				<p><strong>{Passo2?Passo2.perfil:''}</strong></p>
			</div>
		</div>
	)
}

const DadosConfirmar = (props) => {
	const {cadastrando, guardarCadastro, info} = props;
	const guardarInfo = function (evt) {
		info.history.push('/login');
	}
	console.log(cadastrando);
	
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
					<button type="button" className="btn-secondary btn-block"> Cancelar </button>
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
