import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, SearchGrupos, addGrupo, removeGrupo } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from './../../components/modal/Modal.js';
import { InputLine } from './../../components/form';

function CriarEditarContent(props) {
	const {conteudoInfo, changeInfo, status} = props;

	return (
		<section className="box-grupo">
			<div className="row">
				<div className="col-md-12">
					<InputLine
						type="text"
						name="nome"
						label="Nome"
						value={conteudoInfo['nome']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-12">
					<InputLine
						type="text"
						name="descricao"
						label="Descrição"
						value={conteudoInfo['descricao']}
						changeInput={changeInfo}
						required={true}
					/>
				</div>
			</div>
    	</section>
  );
}

const CriarEditar = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, addGrupo, removeGrupo, gruposDados, SearchGrupos} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	
	const changeInfo = (event) =>{
		setInputs({...inputs, [event.target.name]: event.target.value})
	}

	const SalvarGrupo = (event) =>{
		closeModal()
		if (conteudoInfo.id) {
			addAlert('Salvo grupo com sucesso', 'success')
			removeGrupo(inputs.id)
			addGrupo(inputs)
			let infoAdd = []
			for (let i = 0; i < gruposDados.length; i++) {
				if(gruposDados[i].id.indexOf(inputs.id) === -1){					
					infoAdd.push(gruposDados[i])
				} else{
					infoAdd.push(inputs)
				}
				if (i === gruposDados.length-1) {
					console.log(infoAdd);
					
					SearchGrupos(infoAdd)
				}	
			}		
		} else {
			addAlert('Criado grupo com sucesso', 'success')
			addGrupo(inputs)
			SearchGrupos([...gruposDados, inputs])
		}
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Fechar'
		},
		{
			'class': 'btn-success',
			'action': () => SalvarGrupo(),
			'text': 'Salvar'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title={conteudoInfo.id?"Editar Grupo":"Criar Grupo"} 
			container={<CriarEditarContent conteudoInfo={ inputs } status={conteudoInfo.id} changeInfo={ (event)=> changeInfo(event) } />} 
			footer={footerJson} 
			sizeClass="modal-sm"
		/>
  );
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		equipamentosDados: store.equipamentos,
		clientesDados: store.clientes,
		gruposDados: store.grupos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, addGrupo, removeGrupo, SearchGrupos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CriarEditar);