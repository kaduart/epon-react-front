import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, resultSeach } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputLine } from '../../../components/form';

const InfoInternet = (props) => {
	const {conteudoInfo} = props;
	
	return (
		<div className="tab-pane show">
			<div className="row">
				<div className="col-md-12">
					<div className={'alert-' + conteudoInfo['internetStatus']['type']}>
						<small>{conteudoInfo['internetStatus']['text']}</small>
					</div>
				</div>
			</div>
		<div className="row">
			<div className="col-md-4">
				<InputLine
					type="only-see"
					name="velocidade"
					label="Velocidade (mb)"
					value={conteudoInfo['velocidade']}
					required={true}
				/>	
			</div>
			<div className="col-md-4">
				<InputLine
					type="only-see"
					name="serial"
					label="Serial Equipamento"
					value={conteudoInfo['serial']}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoInternet);