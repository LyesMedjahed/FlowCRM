import './Analytics.css';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from "react-chartjs-2";
import { clients } from '../../data/mockData';


Chart.register(...registerables);


export default function Analytics() {

    const filteredClients = clients.filter(client => client.revenue > 0);

    const labels = filteredClients.map(client => client.name);
    const revenues = filteredClients.map(client => client.revenue);

    const totalRevenue = clients.reduce((total, client) => total + client.revenue, 0);
    const data = { 
        labels: labels,
        datasets: [
            {
                label: "Revenue",
                data: revenues,
                backgroundColor: "#2152ff"
            }
        ]
    };
    
    const totlalClients = clients.length;

    const newClients = clients.filter(c => c.status === "New").length;
    const contactedClients = clients.filter(c => c.status === "Contacted").length;
    const wonClients = clients.filter(c => c.status === "Won").length;
    const statusData = {
  labels: ["New", "Contacted", "Won"],
  datasets: [
    {
      label: "Client Status",
      data: [newClients, contactedClients, wonClients],
      backgroundColor: [
        "#3b82f6",
        "#f59e0b",
        "#10b981"
      ]
    }
  ]
};
   
return (
        <div className='analytics-container'>

            <h1 className='analytics-title'>Analytics</h1>

           <div className="analytics-stats">
                <div className="stat-card">
                    <h3>💰 Total Revenue</h3>
                    <p>{totalRevenue}</p>
                </div>
                <div className="stat-card">
                    <h3>👥 Total Clients</h3>
                    <p>{totlalClients}</p>
                </div>
                <div className="stat-card">
                    <h3>🏆 Won deals</h3>
                    <p>{wonClients}</p>
                </div>
            </div><hr />

            <div className="analytics-charts">
              <Bar style={{height: "auto", width: "100%"}} data={data} />
              <p className='totalRevenue'>Total Revenue: {totalRevenue.toLocaleString()} €</p>
              <hr />
              <div className="pie-container">
                <Pie data={statusData} />
              </div>
            </div>  
        </div>
    );
}