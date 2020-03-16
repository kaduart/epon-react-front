import React, { useState, useEffect } from 'react';
import { addAlert, SeachEquipamentos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './equipamentos.css';
import ListEquipamentos from './ListaEquipamentos';
import Titulo from './Titulo';
import Pesquisar from './Pesquisar';
import CriarEditar from './CriarEditar';
import Remover from './Remover';

const clienteDefault = {
	'id': '',
	'nome': '',
	'ip': '',
	'porta': '',
	'usuario': '',
	'senha': ''
}
const modalDefault = {
	'criarEditar': false, 
	'removerEquipamento': false
}
const Equipamentos = (props) => {
	const {equipamentosInfo, equipamentSearch, SeachEquipamentos} = props;
	const [openModal, setOpenModal] = useState(modalDefault)
	const [editarEquipemento, setEditarEquipamento] = useState(clienteDefault)

	useEffect(()=>{
		if (equipamentSearch.length === 0) {			
			SeachEquipamentos(equipamentosInfo)
		}
	})
	
	const EditarEquipamentos = (event, acao) =>{		
		if(acao === 'editar') {
			setEditarEquipamento(event)
			setOpenModal({...openModal, 'criarEditar': true})
		} else if(acao === 'remover') {
			setEditarEquipamento(event)
			setOpenModal({...openModal, 'removerEquipamento': true})
		}
	}

	const Criar = (event) =>{
		setOpenModal({...openModal, 'criarEditar': true})
	}

	const CloseModal = () =>{
		setEditarEquipamento(clienteDefault)			
		setOpenModal(modalDefault)
		SeachEquipamentos(equipamentosInfo)
	}
	
	return (
		<section className="box-equipamentos">
			<Titulo title="Equipamentos" />
			<Pesquisar data={equipamentosInfo} criar={(event)=> Criar(event)} />
			<ListEquipamentos data={equipamentSearch} Resposta={(event, acao)=> EditarEquipamentos(event, acao)} />
			{
				openModal.criarEditar?
				<CriarEditar openModal={openModal.criarEditar} closeModal={()=> CloseModal()} conteudoInfo={editarEquipemento} />
				:null
			}
			{
				openModal.removerEquipamento?
				<Remover openModal={openModal.removerEquipamento} closeModal={()=> CloseModal()} conteudoInfo={editarEquipemento} />
				:null
			}
		</section>
  	);
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts,
		equipamentosInfo: store.equipamentos,
		equipamentSearch: store.information.equipamentos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, SeachEquipamentos}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Equipamentos);