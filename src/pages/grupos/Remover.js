import React from 'react';
import { addAlert, addCliente, removeGrupo, SearchGrupos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../components/modal/Modal.js';

const Remover = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, removeGrupo, gruposDados, SearchGrupos} = props;

	const RemoveGrupo = (event) =>{
		closeModal()
		let infoAdd = []
		for (let i = 0; i < gruposDados.length; i++) {
			if(gruposDados[i].id.indexOf(conteudoInfo.id) === -1){					
				infoAdd.push(gruposDados[i])			}
			if (i === gruposDados.length-1) {				
				SearchGrupos(infoAdd)
			}	
		}		
			removeGrupo(conteudoInfo.id)
			addAlert('Grupo Removido', 'success')
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Cancelar'
		},
		{
			'class': 'btn-danger',
			'action': () => RemoveGrupo(),
			'text': 'Remover'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Remover Grupo"
			container={<p>Ten certeza que quer remover?</p>} 
			footer={footerJson} 
			sizeClass="modal-sm"
		/>
  );
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		gruposDados: store.grupos,
		gruposSearch: store.information.grupos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, addCliente, removeGrupo, SearchGrupos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Remover);