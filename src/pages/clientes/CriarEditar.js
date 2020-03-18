import React, { useState } from 'react';
import { loadingState, addAlert, addCliente, removeCliente, SeachClientes } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from './../../components/modal/Modal.js';
import { InputInbox, TextareaInbox, SelectInbox } from './../../components/form';

function CriarEditarContent(props) {
	const {conteudoInfo, changeInfo, status, gruposDados} = props;
console.log(gruposDados);

	return (
		<section className="box-cliente">
			<div className="row">
				<div className="col-md-4">
					<InputInbox
						type={status?"only-see":"text"}
						name="nContrato"
						label="Nº Contrato"
						value={conteudoInfo['nContrato']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>	
				</div>
				<div className="col-md-8">
					<InputInbox
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
					<TextareaInbox
						type="text"
						name="descricao"
						label="Descrição"
						value={conteudoInfo['descricao']}
						changeInput={changeInfo}
						required={true}
					/>
				</div>
				<div className="col-md-6">					
					<SelectInbox
						labelDefault="nome"
						idDefault="nome"
						type="text"
						name="grupo"
						label="Grupo"
						value={conteudoInfo['grupo']}
						changeInput={changeInfo}
						required={true}

						options={gruposDados}
					/>
				</div>
			</div>
    	</section>
  );
}

const CriarEditar = (props) => {
	const {loadingState, conteudoInfo, openModal, closeModal, addAlert, addCliente, removeCliente, clientesDados, SeachClientes, gruposDados} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	
	const changeInfo = (event) =>{
		setInputs({...inputs, [event.target.name]: event.target.value})
	}

	const SalvarCliente = (event) =>{
		
		loadingState('Carregando...', true)
		
		closeModal()
		if (conteudoInfo.nContrato) {
			addAlert('Salvo com sucesso', 'success')
			removeCliente(inputs.nContrato)
			addCliente(inputs)
			let infoAdd = []
			for (let i = 0; i < clientesDados.length; i++) {
				if(clientesDados[i].nContrato.indexOf(inputs.nContrato) === -1){					
					infoAdd.push(clientesDados[i])
				} else{
					infoAdd.push(inputs)
				}
				if (i === clientesDados.length-1) {
					console.log(infoAdd);
					
					SeachClientes(infoAdd)
				}	
			}		
		} else {
			addAlert('Criado com sucesso', 'success')
			addCliente(inputs)
			SeachClientes([...clientesDados, inputs])
		}
		
        setTimeout(function(){ 
			loadingState('Carregado', false)          
        }, 800);
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Fechar'
		},
		{
			'class': 'btn-success',
			'action': () => SalvarCliente(),
			'text': 'Salvar'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title={conteudoInfo.nContrato?"Editar Cliente":"Criar Cliente"} 
			container={<CriarEditarContent gruposDados={gruposDados} conteudoInfo={ inputs } status={conteudoInfo.nContrato} changeInfo={ (event)=> changeInfo(event) } />} 
			footer={footerJson} 
			sizeClass="modal-lg"
		/>
  );
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		clientesDados: store.clientes,
		gruposDados: store.grupos,
		clientSearch: store.information.clientes
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadingState, addAlert, addCliente, removeCliente, SeachClientes }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CriarEditar);