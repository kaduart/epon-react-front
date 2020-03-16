import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, resultSeach } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputLine } from '../../../components/form';

const InfoRelatorio = (props) => {
	const {conteudoInfo} = props;

	return (
		<div className="tab-pane show">							
			<div className="row">
				<div className="col-md-12">
					<p>Relatório técnico de serviços</p>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoRelatorio);