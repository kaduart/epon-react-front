import React from 'react';
import { addAlert, removeEquipamento, SeachEquipamentos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../components/modal/Modal.js';

const Remover = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, removeEquipamento, equipamentosDados, SeachEquipamentos} = props;

	const RemoveEquipamento = (event) =>{
		closeModal()
		let infoAdd = []
		for (let i = 0; i < equipamentosDados.length; i++) {
			if(equipamentosDados[i].id.indexOf(conteudoInfo.id) === -1){					
				infoAdd.push(equipamentosDados[i])			}
			if (i === equipamentosDados.length-1) {				
				SeachEquipamentos(infoAdd)
			}	
		}		
			removeEquipamento(conteudoInfo.id)
			addAlert('Equipamento Removido', 'success')
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Cancelar'
		},
		{
			'class': 'btn-danger',
			'action': () => RemoveEquipamento(),
			'text': 'Remover'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Remover Equipamento"
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
		equipamentSearch: store.information.equipamentos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, removeEquipamento, SeachEquipamentos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Remover);