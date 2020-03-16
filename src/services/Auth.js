import React, { useState, useEffect } from 'react';
import { addAlert, SearchGrupos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const loginAutentication = (props) =>{
	console.log(props);
	return false
}

const logOut = () =>{
	localStorage.setItem("token", '');
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts,
		clientesInfo: store.clientes,
		gruposSearch: store.information.grupos,
		gruposInfo: store.grupos
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert, SearchGrupos}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(loginAutentication);