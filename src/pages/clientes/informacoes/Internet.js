import React, { useState } from 'react';
import { addAlert, addCliente, removeCliente, resultSeach } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputLine, InputInboxSee } from '../../../components/form';

const InfoInternet = (props) => {
	const {conteudoInfo} = props;
	
	return (
		<div className="tab-pane show">
			<div className="row">
				<div className="col-md-12">
					{
						conteudoInfo['internetStatus']['text']?
						<div className={'alert-' + conteudoInfo['internetStatus']['type']}>
							<small>{conteudoInfo['internetStatus']['text']}</small>
						</div>
						:null
					}
				</div>
			</div>
		<div className="row">
			<div className="col-md-4">
				<InputInboxSee
					label="Velocidade (mb)"
					value={conteudoInfo['velocidade']}
				/>	
			</div>
			<div className="col-md-4">
				<InputInboxSee
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