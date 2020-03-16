import React, { useState, useEffect } from 'react';
import './sidebarLeft.css';
import Menu from './../menu/Menu.js';

const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      	<Menu />
    </aside>
  )
}

export default SidebarLeft;
