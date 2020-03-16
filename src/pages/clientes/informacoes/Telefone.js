import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, resultSeach } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputLine } from '../../../components/form';

const InfoTelefone = (props) => {
	const {conteudoInfo} = props;

	return (
		<div className="tab-pane show">
			<div className="row">
					<div className="col-md-12">
						<div className={'alert-' + conteudoInfo['telefoneStatus']['type']}>
							<small>{conteudoInfo['telefoneStatus']['text']}</small>
						</div>
					</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<InputLine
						type="only-see"
						name="nTelefone"
						label="Telefone"
						value={conteudoInfo['nTelefone']}
						required={true}
					/>
				</div>
			</div>
		</div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoTelefone);