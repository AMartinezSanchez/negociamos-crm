import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>

      <div className="header-right">
        <button className="notification-btn">🔔</button>

        <div className="user-info">
          <div className="avatar">A</div>

          <div>
            <strong>Álvaro Martínez</strong>
            <p>Asesor Inmobiliario</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;