import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, resultSeach } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../../components/modal/Modal.js';
import { InputLine } from '../../../components/form';

import InfoInternet from './Internet';
import InfoTelefone from './Telefone';
import InfoRelatorio from './Relatorio';

function ServicosContent(props) {
	const {conteudoInfo, changeInfo, status} = props;
	const [opcao, setOpcao] = useState('rl');

	const changeOpcao = (event) =>{
		setOpcao(event)
	}

	return (
		<section className="box-servicos">
			<div className="row">
				<div className="col-md-3">
					<p>{conteudoInfo['nContrato']}</p>
				</div>
				<div className="col-md-9">
					<p>{conteudoInfo['nome']}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<p>{conteudoInfo['descricao']}</p>
				</div>
			</div>
			<div className="nav-tabs">
				<nav className="nav">
					<button className={(opcao === 'rl')?"nav-line active":"nav-line"} onClick={()=> changeOpcao('rl')}>Relatório técnico</button>
					{(conteudoInfo['internet'])?
						<button className={(opcao === 'it')?"nav-line active":"nav-line"} onClick={()=> changeOpcao('it')}>Internet</button>
					:null}
					{(conteudoInfo['telefone'])?
						<button className={(opcao === 'tl')?"nav-line active":"nav-line"} onClick={()=> changeOpcao('tl')}>Telefone</button>
					:null}
				</nav>
				<div className="tab-content">
					{
						(opcao === 'it')?
							<InfoInternet conteudoInfo={conteudoInfo} />
						:null
					}
					{
						(opcao === 'tl')?
							<InfoTelefone conteudoInfo={conteudoInfo} />
						:null
					}
					{
						(opcao === 'rl')?
							<InfoRelatorio conteudoInfo={conteudoInfo} />
						:null
					}
				</div>
			</div>
    	</section>
  );
}

const Servicos = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, addCliente, removeCliente, clientesDados, resultSeach} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	
	const changeInfo = (event) =>{
		setInputs({...inputs, [event.target.name]: event.target.value})
	}

	const SalvarCliente = (event) =>{
		closeModal()
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
				
				resultSeach(infoAdd)
			}	
		}
	}
	
	const footerJson = [
		{
			'class': 'btn-secondary',
			'action': closeModal,
			'text': 'Fechar'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Informações"
			container={<ServicosContent conteudoInfo={ inputs } status={conteudoInfo.nContrato} changeInfo={ (event)=> changeInfo(event) } />} 
			footer={footerJson} 
			sizeClass="modal-lg"
		/>
  );
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts,
		equipamentosDados: store.equipamentos,
		clientesDados: store.clientes,
		clientSearch: store.information.result
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, addCliente, removeCliente, resultSeach }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Servicos);