import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, SeachClientes } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../../components/modal/Modal';
import { InputLine, CheckboxSwitch, InputInbox } from '../../../components/form';

function TelefoneContent(props) {
	const {conteudoInfo, changeInfo, status} = props;

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
					{
						conteudoInfo['telefone'].text?
						<div className={'alert-' + conteudoInfo['telefoneStatus']['type']}>
							<small>{conteudoInfo['telefoneStatus']['text']}</small>
						</div>
						: null
					}
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<CheckboxSwitch
						name="telefone"
						label="Serviço telefone"
						checked={conteudoInfo['telefone']}
						changeInput={changeInfo}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<InputInbox
						type="text"
						name="nTelefone"
						label="Telefone"
						value={conteudoInfo['nTelefone']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
			</div>			
    	</section>
  );
}

const ServicosTelefone = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, addCliente, removeCliente, clientesDados, SeachClientes} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	
	const changeInfo = (event) =>{
		if (event.target.type === 'checkbox') {
			setInputs({...inputs, [event.target.name]: event.target.checked})
		} else{
			setInputs({...inputs, [event.target.name]: event.target.value})
		}
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
				SeachClientes(infoAdd)
			}	
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
			'action': () => SalvarCliente(),
			'text': 'Salvar'
		}
	];
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Serviços de telefone"
			container={<TelefoneContent conteudoInfo={ inputs } status={conteudoInfo.nContrato} changeInfo={ (event)=> changeInfo(event) } />} 
			footer={footerJson} 
			sizeClass="modal-md"
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ServicosTelefone);