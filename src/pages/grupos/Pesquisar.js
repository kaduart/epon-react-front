import React, { useState } from 'react';
import { addAlert, SearchGrupos } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IcoSearch, IcoClose } from '../../components/icones'
import { InputLine } from '../../components/form';

const inputsDefault = {
	'pesquisar': ''
}
const Pesquisar = (props) => {
	const {SearchGrupos, data, criar} = props;
	const [inputs, setInputs] = useState(inputsDefault)
	
	const ChangeInput = (event) =>{
		setInputs({...inputs, [event.target.name]:event.target.value})
	}

	const Search = (event) =>{
		if (event === 'erase') {
			setInputs(inputsDefault)
			SearchGrupos(data)
			
		} else{
			let infoAdd = []
			for (let i = 0; i < data.length; i++) {
				if((data[i].nome).toUpperCase().indexOf(inputs.pesquisar.toUpperCase()) !== -1){					
					infoAdd.push(data[i])
				} else if(data[i].id.indexOf(inputs.pesquisar) !== -1){					
					infoAdd.push(data[i])
				}
				if (i === data.length-1) {
					SearchGrupos(infoAdd)
				}	
			}
		}		
	}

	const CriarGrupo = (event) =>{
		criar(event)
	}
		
	return (			
			<div className="box-pesquisas margin-bottom-15">
				<div className="row">
					<div className="col-md-6 margin-bottom-15">
						<div className="cal-group">
							<div className="cal-colum cal-100">								
								<InputLine
									type="text"
									name="pesquisar"
									label="Pesquisar Grupo"
									value={inputs['pesquisar']}
									changeInput={(event)=> ChangeInput(event)}
									required={true}
									search={()=> Search('erase')}
								/>
							</div>
							<div className="cal-button cal-1 vertical-align-bottom">
								<button onClick={()=> Search()} title="Pesquisar" className="btn-outline-success btn-lg"><IcoSearch title="Pesquisar" /></button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="float-right">
							<button className="btn-success btn-lg bt-criar" title="Criar" onClick={(event)=> CriarGrupo()}><IcoClose title="Criar" /></button>
						</div>
					</div>
				</div>
			</div>
  	);
}

const mapStateToProps = store => {	
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, SearchGrupos }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Pesquisar);