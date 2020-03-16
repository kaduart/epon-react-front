import React, { useState } from 'react'
import { addAlert, guardarCadastro } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Login.css';
import { InputLine, SelectLine } from '../../components/form';
import EstadoCidade from './estados-cidades.json';

const inputsDefault = {'telefone': '', 'cep':'', 'uf':'', 'cidade':'', 'perfil':''};

const DadosComplementares = (props) => {
	const {cadastrando, guardarCadastro, info} = props;
	const [inputs, setInputs] = useState(inputsDefault);
	const [estados, setEstados] = useState([]);

	const changeInput = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
	}
	 
	const changeSelectUf = function (evt) {
		setInputs({...inputs, [evt.target.name]: evt.target.value});
		setEstados(JSON.parse(evt.target.value).cidades)
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
					<InputLine
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
					<InputLine
						type="text"
						name="cep"
						label="Cep"
						value={inputs['cep']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-4">
					<SelectLine
						type="text"
						name="uf"
						label="UF"
						labelDefault="sigla"
						value={inputs['uf']}
						changeInput={(event)=> changeSelectUf(event)}
						required={true}
						validate={true}

						options={EstadoCidade.estados}
					/>
				</div>
				<div className="col-md-8">
					<SelectLine
						labelDefault=""
						idDefault={false}
						type="text"
						name="cidade"
						label="Cidade"
						value={inputs['cidade']}
						changeInput={(event)=> changeInput(event)}
						required={true}
						validate={true}

						options={estados}
					/>
				</div>
				<div className="col-md-12">
					<SelectLine
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
					/>
				</div>
			</div>
			<div className="row box-btn">
				<div className="col-md-6 col-sm-6">
					<button type="button" className="btn-secondary btn-block"> Cancelar </button>
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
