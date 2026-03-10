import { useState } from 'react';
import '../Home/Home.css';
import RevenueChart from '../../components/chartsJS/RevenueChart.jsx';
import LeadsChart from '../../components/chartsJS/LeadsCharts.jsx';
import ActivityTable from '../../components/ActivityTable/ActivityTable.jsx';
import StatCard from '../../components/StatCard.jsx';
import { clients } from "../../data/mockData";
import { HiUsers, HiUserAdd, HiCurrencyDollar, HiChartBar } from "react-icons/hi";

export default function Home() { 

  const totalClients = clients.length;
  const totalLeads = clients.filter(c => c.status === "lead").length;
  const activeLeads = totalLeads;
  const totalRevenue = clients.reduce((acc, curr) => acc + curr.revenue, 0);
  const formattedRevenue = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(totalRevenue);
  const converted = clients.filter(c => c.status === "converted").length;
  const conversionRate =
    totalLeads === 0
      ? 0
      : ((converted / totalLeads) * 100).toFixed(1);

      /*search */
  const [search, setSearch] = useState("");
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );


    return (
     <div>

      <clients clients={filteredClients} />

      <h1 className='home-title'>Dashboard</h1>
      
      <div className="dashboard-container"> 
        <section className="stats-section">
        <StatCard 
          style={{width: '50px'}}
          title="Total Clients"
          value={totalClients}
          percentage="+12%"
          icon={<HiUsers size={30} />}
          color="blue"
        />
        <StatCard 
          title="Active Leads"
          value={activeLeads}
          percentage="+8%"
          icon={<HiUserAdd size={30} />}
          color="purple"
        />
        <StatCard 
          title="Total Revenue"
          value={formattedRevenue}
          percentage="+18%"
          icon={<HiCurrencyDollar size={30} />}
          color="green"
        />
        <StatCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          percentage="+4%"
          icon={<HiChartBar size={30} />}
          color="orange"
        />
      </section>

      <section className="charts-section">
        <div className="chart-card">
            <RevenueChart  />
        </div>
        <div className="chart-card">
            <LeadsChart  />
        </div>
      </section>

      <section className="activity-section">
         <ActivityTable />
      </section>
     </div> 
    </div>
    )
}