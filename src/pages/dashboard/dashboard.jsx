import MainLayout from "../../layouts/MainLayout/MainLayout";
import StatCard from "../../components/StatCard/StatCard";
import { stats, recentActivities } from "../../data/dashboardData";
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
          {stats.map((item) => (
            <StatCard
              key={item.id}
              title={item.title}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>

        <div className="activity-section">
          <h2>Actividad reciente</h2>

          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div className="activity-item" key={activity.id}>
                <strong>{activity.cliente}</strong>

                <p>{activity.accion}</p>

                <span>{activity.hora}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;