import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './menu.css';
import { IcoExit } from './../icones'

import MenuJson from './menu.json'

const SubMenu = (props) => {
  return  props.map(function(item){
            return <li key={item.item}><Link to={"/" + item.item}>{item.icone}{item.text}</Link></li>
          })  
}

const Menu = (props) => {
  const [menuNav, setMenuNav] = useState({});

  const changeMenu = (item) => {
     setMenuNav({...menuNav,[item] : !menuNav[item]})     
  }

  return (
        <ul className="nav">          
            {
              MenuJson.map(function(item){                
                if (item.subMenu) {
                  return (
                    <li key={item.item} className={(menuNav[item.item])?'sub-nav active':'sub-nav'}>
                      <button onClick={() => changeMenu(item.item)}>
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
  )
}

export default Menu;
