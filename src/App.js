import React, { useState, useEffect } from 'react';
import { addAlert } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ProtectedRoute } from './router';

import AlertMensages from './components/alertsMensage/AlertsMensage.js';
import Header from './components/header/Header.js'
import SidebarLeft from './components/sidebarLeft/SidebarLeft.js';
import SidebarRight from './components/sidebarRight/SidebarRight.js';
import Footer from './components/footer/Footer.js';

import './app.css';

function App(props) {
	const {user} = props;
	const [sidebarLeft, setSidebarLeft] = useState(true);
	const [sidebarRight, setSidebarRight] = useState(false);

	const changeSidebarLeft = () => {
		setSidebarLeft(sidebarLeft?false:true)
	}
	const changeSidebarRight = () => {
		setSidebarRight(sidebarRight?false:true)
	}

	var element = document.getElementsByTagName("body")[0];
	if (user['preferencia']?user['preferencia']['contrast']:false) {
		element.classList.add("intelbras-dark");
	} else{
		element.classList.remove("intelbras-dark");
	}
	if (user.id) {
		return (
		  <div className={(user['preferencia']?user['preferencia']['contrast']:false)?"intelbras-dark":"intelbras"}>
				<AlertMensages />
			  <Header changeSidebarLeft={changeSidebarLeft} changeSidebarRight={changeSidebarRight} />
			  <div className="box-content">
				  {
					  sidebarLeft?
					  <SidebarLeft />
					  : null
				  }
	  
				  <div className="content">
					  <section className="container-fluid">
						  <ProtectedRoute />
					  </section>				
	  
					  <Footer />
				  </div>
			  {
				  sidebarRight?
				  <SidebarRight />
				  : null
			  }
			  </div>
		  </div>
		);		
	} else {
		return (
			<div className={(user['preferencia']?user['preferencia']['contrast']:false)?"intelbras-dark":"intelbras-login"}>
				<AlertMensages />
				<ProtectedRoute />
			</div>
		  );
	}
}

const mapStateToProps = store => {	
	return ({
		user: store.user
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(App);