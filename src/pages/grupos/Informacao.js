import React, { useState } from 'react';
import { addAlert, SearchGrupos, addGrupo, removeGrupo } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../components/modal/Modal.js';
import { MultSelectLineBox } from '../../components/form';

function InformacaoContent(props) {
	const {conteudoInfo, changeInfo, changeInfoSelected, clientesDados, equipamentosDados } = props;

	return (
		<section className="box-grupo">
			<div className="row">
				<div className="col-md-12">
					<p>{conteudoInfo['nome']}</p>
				</div>
				<div className="col-md-12">
					<p>{conteudoInfo['descricao']}</p>
				</div>
			</div>
			<hr />
			<div className="row">
			<div className="col-md-6">
					<p>OLT's vinculadas </p>
					<MultSelectLineBox
						labelDefault="nome"
						idDefault="id"
						name="olts"
						label="OLT"
						options={equipamentosDados}
						optionsSelected={conteudoInfo['olts']}
						value={conteudoInfo['olts']}
						changeInput={changeInfoSelected}
						required={true}
					/>
				</div>
				<div className="col-md-6">
					<p>Clientes vinculados </p>
					<MultSelectLineBox
						labelDefault="nome"
						idDefault="nContrato"
						name="clientes"
						label="clientes"
						options={clientesDados}
						optionsSelected={conteudoInfo['clientes']}
						value={conteudoInfo['clientes']}
						changeInput={changeInfoSelected}
						required={true}
					/>
				</div>
			</div>
    	</section>
  );
}

const Informacao = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, addGrupo, removeGrupo, gruposDados, SearchGrupos, clientesDados, equipamentosDados} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	const [equipamentos, setEquipamentos] = useState(conteudoInfo.olts);
	
	const changeInfo = (event) =>{
		setInputs({...inputs, [event.target.name]: event.target.value})
	}

	const changeInfoSelected = (event) =>{
		setInputs({...inputs, [event.target.classList.value]: [...inputs[event.target.classList.value], JSON.parse(event.target.value) ] })
	}

	const addEquipamento = (event) => {
		console.log(event);
		setEquipamentos([...equipamentos, inputs.adicioinar])
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
					SearchGrupos(infoAdd)
				}	
			}		
		} else {
			addAlert('Vinculados com sucesso', 'success')
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
	console.log(inputs, 'asdfghjklç');
	
	return (
		<ModalComponent 
			open={openModal} 
			close={closeModal} 
			title="Vinculos Grupo" 
			container={
				<InformacaoContent 
					conteudoInfo={ inputs } 
					status={conteudoInfo.id} 
					changeInfo={ (event)=> changeInfo(event) }
					changeInfoSelected={ (event)=> changeInfoSelected(event) } 
					gruposDados={gruposDados} 
					addEquipamento={addEquipamento} 
					equipamentosDados={equipamentosDados}
					clientesDados={clientesDados}
				/>
			} 
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
		gruposDados: store.grupos,
		gruposSearch: store.information.grupos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, addGrupo, removeGrupo, SearchGrupos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Informacao);