import React from "react";
import { NavLink } from 'react-router-dom';
import { dataMenu } from 'Data';

const Sidebar = () => <aside>
   <ul className="menu">
     { dataMenu.map((el,index) => <li className="menu-item" key={index}> <NavLink 
     activeStyle={{
      backgroundColor: "#fff",
      color: "#57b2f0",
    }}
     className="menu-link" to={el.link}>{el.name}</NavLink></li>) }
   </ul>
  
 </aside>

export default Sidebar;
