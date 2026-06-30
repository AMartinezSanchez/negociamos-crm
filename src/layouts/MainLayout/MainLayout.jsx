import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />

        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;