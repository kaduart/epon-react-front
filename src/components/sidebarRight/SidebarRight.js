import React, { useState } from 'react';
import { logIn, logOut } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import './sidebarRight.css';
import { IcoUserCircle } from './../icones'
import { CheckboxSwitch } from '../form';

const MenuAdmJson = [
	{		
		"item": "meus-dados",
		"text": "Meus dados"
	},
	{		
		"item": "gerenciar-pessoas",
		"text": "Gerenciar pessoas"
	}
]

const SubMenu = (props) => {
	return  props.map(function(item){
		return <li key={item.item}><Link to={"/" + item.item}>{item.icone}{item.text}</Link></li>
	})  
}

const SidebarRight = (props) => {
	const {user, logIn, logOut} = props;
	const [menuNavAdm, setMenuNavAdm] = useState({});
  
	const changeMenuAdm = (item) => {
		setMenuNavAdm({...menuNavAdm,[item] : !menuNavAdm[item]})     
	}

	const acessibilidadeChange = (item) => {		
		logIn({...user, 'preferencia': {...user['preferencia']['contrast'], [item.target.name] : item.target.checked }})
	}	
	const sairLogIn = (item) => {		
		console.log(props);
		
		//logOut(user.id)
	}	

  return (
	<aside className="sidebar-right">
		<div className="info-usuario">
			<div className="img-usuario">
		 		<IcoUserCircle />
			</div>
			<h5>
				{user.nome}
			 	<small>{user.perfil}</small>
			</h5>
		</div>
		<ul className="nav">          
            {
              MenuAdmJson.map(function(item){                
                if (item.subMenu) {
                  return (
                    <li key={item.item} className={(menuNavAdm[item.item])?'sub-nav active':'sub-nav'}>
                      <button onClick={() => changeMenuAdm(item.item)}>
                        {item.icone}
                        {item.text}
                      </button>
                        <ul className="nav">
                            {SubMenu(item.subMenu)}
                        </ul>
                    </li>
                  )
                } else{
                  return <li key={item.item}><Link to={"/" + item.item}>{item.text}</Link></li>
                }
              })
            }         
        </ul>
		<div className="text-center" style={{marginTop: '40px'}}>
			<CheckboxSwitch 
				title={user['preferencia']['contrast']?'Escuro':'Claro'}
				name="contrast"
				label="Contraste"
				checked={user['preferencia']['contrast']}
				changeInput={(event)=> acessibilidadeChange(event)}
			/>
		</div>
		<Link className="btn-success bt-sair" to={"/login?log=out"}>Sair</Link>
		<small className="version-sistem">1.0.9</small>
	</aside>
  )
}

const mapStateToProps = store => {	
	return ({
		user: store.user
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logIn, logOut }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);