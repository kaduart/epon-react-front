import React, { useState, useEffect } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './../login/Login.css';
import { InputInbox, SelectInbox } from '../../components/form';

import { IcoReload } from '../../components/icones';

const inputsDefault = {'telefone': '', 'cep':'', 'uf':'', 'cidade':'', 'perfil':''};
const nUfIbge = {"AC": 12, "AL": 27, "AP": 16, "AM": 13, "BA": 29, "CE": 23, "DF": 53, "ES": 32, "GO": 52, "MA": 21, "MT": 51, "MS": 50, "MG": 31, "PA": 15, "PB": 25, "PR": 41, "PE": 26, "PI": 22, "RJ": 33, "RN": 24, "RS": 43, "RO": 11, "RR": 14, "SC": 42, "SP": 35, "SE": 28, "TO": 17};
const DadosComplementares = (props) => {
	const {cadastrando, guardarCadastro, info, addAlert} = props;
	const [inputs, setInputs] = useState(inputsDefault);
	const [UFsJson, setUFsJson] = useState([]);
	const [cidadeJson, setcidadeJson] = useState([]);

	useEffect(()=>{
		if (!UFsJson.length) {
			fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', { method: 'get' })
			.then(response => response.json())
			.then(response => {
				setUFsJson(response)
			})
		}
		if (cadastrando.passo2) {
			setInputs(cadastrando.passo2)
		}
	})
	
	const changeInput = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
	}

	const changeInputCep = function (evt) {		
		fetch('https://api.pagar.me/1/zipcodes/' + inputs.cep, { method: 'get' })
		.then(response => response.json())
		.then(response => {
			if (response.errors) {
				addAlert('Este CEP ' + inputs.cep + ' não existe, tente um valido', 'danger')
			} else{
				reloadSelectUf(nUfIbge[response.state])
				setInputs({...inputs, 'uf': response.state, 'cidade': response.city })
			}
		})
	}

	const changeSelectUf = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
		reloadSelectUf(nUfIbge[evt.target.value])
	} 

	const reloadSelectUf = function (id) {
		fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ id + '/distritos', { method: 'get' })
		.then(response => response.json())
		.then(response => {
			setcidadeJson(response)
		})
	}
	
	const guardarInfo = function (evt) {
		guardarCadastro({...cadastrando, 'passo2': inputs})
		info.history.push('/cadastro?passo=3');
	}
	
    return (
		<div className="box-dados">
			<div className="row">     
				<div className="col-md-12">
					<h5 className="titulo">Mais algumas informações!</h5>
				</div>
			</div>
			<div className="row">     
				<div className="col-md-6">
					<InputInbox
						type="text"
						name="telefone"
						label="Telefone"
						value={inputs['telefone']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-6">
					<div className="cal-group cal-input">
						<div className="cal-colum">
							<InputInbox
								type="text"
								name="cep"
								label="Cep"
								value={inputs['cep']}
								changeInput={(event)=> changeInput(event)}
								required={true}
								validate={true}
							/>		
						</div>
						<div className="cal-button">
							<button type="button" onClick={()=> changeInputCep()} className="btn-outline-success"><IcoReload /></button>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<SelectInbox
						type="text"
						name="uf"
						label="UF"
						idDefault="name"
						labelDefault="sigla"
						value={inputs['uf']}
						changeInput={(event)=> changeSelectUf(event)}
						required={true}
						validate={true}

						options={UFsJson}
					/>
				</div>
				<div className="col-md-8">
					<SelectInbox
						labelDefault="nome"
						idDefault="nome"
						type="text"
						name="cidade"
						label="Cidade"
						value={inputs['cidade']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}

						options={cidadeJson}
					/>
				</div>
				<div className="col-md-12">
					{/* <SelectInbox
						type="text"
						name="perfil"
						label="Perfil"
						labelDefault=""
						idDefault=""
						value={inputs['perfil']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
						options={[]}
					/> */}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(DadosComplementares);
