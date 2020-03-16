import React, { useState, useEffect } from 'react';
import './header.css';
import { IcoMenu, IcoIntelbras, IcoExit, IcoUserCircle } from './../icones'


function Header(props) {
  const {changeSidebarLeft, changeSidebarRight} = props;  

  return (
    <header className="box-header">
    <div className="d">
      <button className="bt-sidebar-left" onClick={changeSidebarLeft}>
        <IcoMenu />
      </button>
    </div>
    <div className="title-header">
      <h1><IcoIntelbras title="Intelbras" /></h1>
    </div>
    <div className="d">
      <button onClick={changeSidebarRight}>
        <IcoUserCircle />
      </button>
    </div>
  </header>
  );
}

export default Header;
