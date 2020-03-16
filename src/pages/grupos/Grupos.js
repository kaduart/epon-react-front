import React, { useState, useEffect } from 'react';
import { addAlert, SearchGrupos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './grupos.css';
import { IcoSandwichMenu, IcoEditar, IcoCog, IcoRemove } from '../../components/icones'
import ListGrupos from './ListaGrupos';
import Titulo from './Titulo';
import Pesquisar from './Pesquisar';
import CriarEditar from './CriarEditar';

import Remover from './Remover';
import Informacao from './Informacao';

const clienteDefault = {
	'id': '',
	'nome': '',
	'descricao': '',
	'olts': [],
	'clientes': []
}
const modalDefault = {
	'criarEditar': false, 
	'removerCliente': false,
	'vinculos': false
}
const Clientes = (props) => {
	const {clientesInfo, gruposInfo, gruposSearch, SearchGrupos} = props;
	const [openModal, setOpenModal] = useState(modalDefault)
	const [editarGrupo, setEditarGrupo] = useState(clienteDefault)

	useEffect(()=>{
		if (gruposSearch.length === 0) {			
			SearchGrupos(gruposInfo)
		}
	})
	
	const EditarGrupo = (event, acao) =>{		
		if(acao === 'editar') {
			setEditarGrupo(event)
			setOpenModal({...openModal, 'criarEditar': true})
		} else if(acao === 'remover') {
			setEditarGrupo(event)
			setOpenModal({...openModal, 'removerCliente': true})
		} else if(acao === 'informacao') {
			setEditarGrupo(event)
			setOpenModal({...openModal, 'vinculos': true})
		}
	}

	const Criar = (event) =>{
		setOpenModal({...openModal, 'criarEditar': true})
	}

	const CloseModal = () =>{
		setEditarGrupo(clienteDefault)			
		setOpenModal(modalDefault)
		SearchGrupos(clientesInfo)
	}
	
	return (
		<section className="box-grupos">
			<Titulo title="Grupos" />
			<Pesquisar data={gruposInfo} criar={(event)=> Criar(event)} />
			<ListGrupos data={gruposSearch} Resposta={(event, acao)=> EditarGrupo(event, acao)} />
			{
				openModal.criarEditar?
				<CriarEditar openModal={openModal.criarEditar} closeModal={()=> CloseModal()} conteudoInfo={editarGrupo} />
				:null
			}
			{
				openModal.removerCliente?
				<Remover openModal={openModal.removerCliente} closeModal={()=> CloseModal()} conteudoInfo={editarGrupo} />
				:null
			}
			{
				openModal.vinculos?
				<Informacao openModal={openModal.vinculos} closeModal={()=> CloseModal()} conteudoInfo={editarGrupo} />
				:null
			}
		</section>
  	);
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts,
		clientesInfo: store.clientes,
		gruposSearch: store.information.grupos,
		gruposInfo: store.grupos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, SearchGrupos}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Clientes);