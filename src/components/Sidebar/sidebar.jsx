import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaProjectDiagram,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";

const menuItems = [
  { text: "Dashboard", icon: <FaChartPie />, path: "/" },
  { text: "Leads", icon: <FaUsers />, path: "/leads" },
  { text: "Pipeline", icon: <FaProjectDiagram />, path: "/pipeline" },
  { text: "Agenda", icon: <FaCalendarAlt />, path: "/agenda" },
  { text: "Reportes", icon: <FaChartBar />, path: "/reportes" },
  { text: "Configuración", icon: <FaCog />, path: "/configuracion" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>NEGOCIAMOS</h2>
        <span>CRM</span>
      </div>

      <nav>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;