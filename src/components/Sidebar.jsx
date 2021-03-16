import React from "react";
import { Link } from 'react-router-dom';
import { dataMenu } from 'Data';

const Sidebar = () => <aside>
   <ul className="menu">
     { dataMenu.map((el,index) => <li className="menu-item" key={index}> <Link className="menu-link" to={el.link}>{el.name}</Link></li>) }
   </ul>
  
 </aside>

export default Sidebar;
