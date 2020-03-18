import React, { useState, useEffect } from 'react';
import { addAlert, SeachClientes } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './clientes.css';
import { IcoSandwichMenu, IcoEditar, IcoCog, IcoRemove } from '../../components/icones'
import ListClientes from './ListaClientes';
import Titulo from './Titulo';
import Pesquisar from './Pesquisar';
import CriarEditar from './CriarEditar';

import ServicosInternet from './servicos/Internet';
import ServicosTelefone from './servicos/Telefone';
import Remover from './Remover';
import { IcoRemoveLine } from '../../components/icones/removeLine';
import Informacoes from './informacoes/Informacoes';
import Paginate from '../../components/pagination/Pagination';

const clienteDefault = {
	'nContrato': '',
	'nome': '',
	'descricao': '',
	'internet': '',
	'velocidade': '',
	'entregue': '',
	'serial': '',
	'telefone': '',
	'nTelefone': '',
	'internetStatus': {'type': '', 'text': ''},
	'telefoneStatus': {'type': '', 'text': ''}
}
const modalDefault = {
	'criarEditar': false, 
	'removerCliente': false, 
	'informacoes': false, 
	'servicosInternet': false, 
	'servicosTelefone': false
}
const Clientes = (props) => {
	const {clientesInfo, clientSearch, SeachClientes} = props;
	const [openModal, setOpenModal] = useState(modalDefault)
	const [editarCliente, setEditarCliente] = useState(clienteDefault)

	useEffect(()=>{
		if (clientSearch.length === 0) {			
			SeachClientes(clientesInfo)
		}
	})
	
	const EditarCliente = (event, acao) =>{		
		if(acao === 'editar') {
			setEditarCliente(event)
			setOpenModal({...openModal, 'criarEditar': true})
		} else if(acao === 'remover') {
			setEditarCliente(event)
			setOpenModal({...openModal, 'removerCliente': true})
		} else if(acao === 'informacoes') {
			setEditarCliente(event)
			setOpenModal({...openModal, 'informacoes': true})
		} else if(acao === 'internet') {
			setEditarCliente(event)
			setOpenModal({...openModal, 'servicosInternet': true})
		} else if(acao === 'telefone') {
			setEditarCliente(event)
			setOpenModal({...openModal, 'servicosTelefone': true})
		}
	}

	const Criar = (event) =>{
		setOpenModal({...openModal, 'criarEditar': true})
	}

	const CloseModal = () =>{
		setEditarCliente(clienteDefault)			
		setOpenModal(modalDefault)
		SeachClientes(clientesInfo)
	}
	
	return (
		<section className="box-clientes">
			<Titulo title="Clientes" />
			<Pesquisar data={clientesInfo} criar={(event)=> Criar(event)} />
			<ListClientes data={clientSearch} Resposta={(event, acao)=> EditarCliente(event, acao)} />
			{
				(clientSearch.length >= 10)?
				<Paginate />
				:null
			}
			{
				openModal.criarEditar?
				<CriarEditar openModal={openModal.criarEditar} closeModal={()=> CloseModal()} conteudoInfo={editarCliente} />
				:null
			}
			{
				openModal.removerCliente?
				<Remover openModal={openModal.removerCliente} closeModal={()=> CloseModal()} conteudoInfo={editarCliente} />
				:null
			}
			{
				openModal.informacoes?
				<Informacoes openModal={openModal.informacoes} closeModal={()=> CloseModal()} conteudoInfo={editarCliente} />
				:null
			}
			{
				openModal.servicosInternet?
				<ServicosInternet openModal={openModal.servicosInternet} closeModal={()=> CloseModal()} conteudoInfo={editarCliente} />
				:null
			}
			{
				openModal.servicosTelefone?
				<ServicosTelefone openModal={openModal.servicosTelefone} closeModal={()=> CloseModal()} conteudoInfo={editarCliente} />
				:null
			}
		</section>
  	);
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		clientesInfo: store.clientes,
		clientSearch: store.information.clientes
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, SeachClientes}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Clientes);