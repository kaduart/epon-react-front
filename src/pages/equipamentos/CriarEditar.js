import React, { useState } from 'react';
import { addAlert, addEquipamento, removeEquipamento, SeachEquipamentos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalComponent from '../../components/modal/Modal.js';
import { InputLine } from '../../components/form';

function CriarEditarContent(props) {
	const { conteudoInfo, changeInfo } = props;

	return (
		<section className="box-cliente">
			<div className="row">
				<div className="col-md-6">
					<InputLine
						type="text"
						name="nome"
						label="Nome"
						value={conteudoInfo['nome']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-4">
					<InputLine
						type="text"
						name="ip"
						label="IP"
						value={conteudoInfo['ip']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-2">
					<InputLine
						type="text"
						name="porta"
						label="Porta"
						value={conteudoInfo['porta']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-6">
					<InputLine
						type="text"
						name="usuario"
						label="Úsuario"
						value={conteudoInfo['usuario']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
				<div className="col-md-6">
					<InputLine
						type="text"
						name="senha"
						label="Senha"
						value={conteudoInfo['senha']}
						changeInput={changeInfo}
						required={true}
						validate={true}
					/>
				</div>
			</div>
    	</section>
  );
}

const CriarEditar = (props) => {
	const {conteudoInfo, openModal, closeModal, addAlert, addEquipamento, removeEquipamento, equipamentosDados, SeachEquipamentos} = props;
	const [inputs, setInputs] = useState(conteudoInfo);
	
	const changeInfo = (event) =>{
		setInputs({...inputs, [event.target.name]: event.target.value})
	}

	const SalvarCliente = (event) =>{
		closeModal()
		if (conteudoInfo.id) {
			addAlert('Salvo com sucesso', 'success')
			removeEquipamento(inputs.id)
			addEquipamento(inputs)
			let infoAdd = []
			for (let i = 0; i < equipamentosDados.length; i++) {
				if(equipamentosDados[i].id.indexOf(inputs.id) === -1){					
					infoAdd.push(equipamentosDados[i])
				} else{
					infoAdd.push(inputs)
				}
				if (i === equipamentosDados.length-1) {
					console.log(infoAdd);
					
					SeachEquipamentos(infoAdd)
				}	
			}		
		} else {
			addAlert('Criado com sucesso', 'success')
			addEquipamento(inputs)
			SeachEquipamentos([...equipamentosDados, inputs])
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
			title={conteudoInfo.id?"Editar Equipamento":"Criar Equipamento"} 
			container={<CriarEditarContent conteudoInfo={ inputs } status={conteudoInfo.id} changeInfo={ (event)=> changeInfo(event) } />} 
			footer={footerJson} 
			sizeClass="modal-lg"
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
  bindActionCreators({ addAlert, addEquipamento, removeEquipamento, SeachEquipamentos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CriarEditar);