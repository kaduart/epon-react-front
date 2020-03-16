import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const PassoaPasso = (props) => {
	const {changePasso, info} = props;
	const [passo, sePasso] = useState(1);
	
	const ativaPasso = function (evt) {        
        console.log(evt, 'changeInput', props);
		sePasso(evt);
		info.history.push('/cadastro?passo='+ evt);
	}
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const product = urlParams.get('passo')
	
    return (
		<div className="navbar-progress">
			<div className={(Number(product) === 1)?'active':''}><button type="button" onClick={(event)=> ativaPasso(1)} title={'Dados Pessoais'}></button></div>
			<div className={(Number(product) === 2)?'active':''}><button type="button" onClick={(event)=> ativaPasso(2)} title={'Dados Complementares'}></button></div>
			<div className={(Number(product) === 3)?'active':''}><button type="button" onClick={(event)=> ativaPasso(3)} title={'Senha'}></button></div>
			<div className={(Number(product) === 4)?'active':''}><button type="button" onClick={(event)=> ativaPasso(4)} title={'Senha'}></button></div>
		</div>
	);
	
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(PassoaPasso);
