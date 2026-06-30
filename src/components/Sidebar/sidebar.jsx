import "./Sidebar.css";

import {
  FaChartPie,
  FaUsers,
  FaProjectDiagram,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const menu = [
  { icon: <FaChartPie />, text: "Dashboard" },
  { icon: <FaUsers />, text: "Leads" },
  { icon: <FaProjectDiagram />, text: "Pipeline" },
  { icon: <FaCalendarAlt />, text: "Agenda" },
  { icon: <FaChartBar />, text: "Reportes" },
  { icon: <FaCog />, text: "Configuración" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">NEGOCIAMOS</h2>

      <ul className="menu">
        {menu.map((item, index) => (
          <li key={index}>
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;