import MainLayout from "../../layouts/MainLayout/MainLayout";
import StatCard from "../../components/StatCard/StatCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard">

        <h1>Dashboard</h1>

        <p className="subtitle">
          Bienvenido a NEGOCIAMOS CRM
        </p>

        <div className="stats-grid">

          <StatCard
            title="Leads"
            value="245"
            color="#2563EB"
          />

          <StatCard
            title="Ventas"
            value="$850 M"
            color="#16A34A"
          />

          <StatCard
            title="Seguimientos"
            value="18"
            color="#EA580C"
          />

          <StatCard
            title="Conversión"
            value="34%"
            color="#9333EA"
          />

        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;