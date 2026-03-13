import { HiHome } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiCog } from "react-icons/hi";

import './Sidebar.css';

import { NavLink } from 'react-router-dom';
import { useState } from "react";


function Sidebar({ sidebarOpen}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed && !sidebarOpen ? "collapsed" : ""} 
                             ${sidebarOpen ? "open" : ""}`}>

      <div className="sidebar-container" style={{ marginTop: "40px"}}>

        <HiOutlineLogin  
          className={`toggle-icon ${collapsed ? "rotated" : ""}`}
          size={25}
          style={{cursor: "pointer"}} 
          onClick={()=> setCollapsed(!collapsed)}
        />
  
  <nav>

    <NavLink to="/home" className={({ isActive }) => `sidebar-element ${isActive ? "active" : ""}`}>
      <HiHome size={20} />
      <span className="link">Dashboard</span>
    </NavLink>

  <NavLink to="/clients" className="sidebar-element">
    <HiUsers size={20} />
    <span className="link">Clients</span>
  </NavLink>

  <NavLink to="/leads" className="sidebar-element">
    <HiCollection size={20}  />
    <span className="link">Leads</span>
  </NavLink>

  <NavLink to="/analytics" className="sidebar-element">
    <HiChartBar size={20}  />
    <span className="link">Analytics</span>
  </NavLink>

  <NavLink to="/settings" className="sidebar-element">
    <HiCog size={20}  />
    <span className="link">Settings</span>
  </NavLink>
</nav>
      </div>
    </div>
  );
}

export default Sidebar;
