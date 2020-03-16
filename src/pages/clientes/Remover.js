import React from 'react';
import { addAlert, addCliente, removeCliente, SeachClientes } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../components/modal/Modal.js';

const Remover = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, removeCliente, clientesDados, SeachClientes} = props;

	const RemoveCliente = (event) =>{
		closeModal()
		let infoAdd = []
		for (let i = 0; i < clientesDados.length; i++) {
			if(clientesDados[i].nContrato.indexOf(conteudoInfo.nContrato) === -1){					
				infoAdd.push(clientesDados[i])			}
			if (i === clientesDados.length-1) {				
				SeachClientes(infoAdd)
			}	
		}		
			removeCliente(conteudoInfo.nContrato)
			addAlert('Cliente Removido', 'success')
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Cancelar'
		},
		{
			'class': 'btn-danger',
			'action': () => RemoveCliente(),
			'text': 'Remover'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Remover Cliente"
			container={<p>Ten certeza que quer remover?</p>} 
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
		clientSearch: store.information.clientes
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, addCliente, removeCliente, SeachClientes }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Remover);