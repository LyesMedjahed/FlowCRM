import "./ActivityTable.css";
import { clients } from "../../data/mockData";

function ActivityTable(){
    return (
        <div>
 <table className="activity-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Revenue</th>
      <th>Month</th>
    </tr>
  </thead>

  <tbody>
    {clients.map(client => (
      <tr key={client.id}>
         <td>{client.name}</td>
         <td>
            <span className={`status ${client.status}`}> {client.status} </span>
         </td>
         <td>{client.revenue}</td>
         <td>{client.month}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}

export default ActivityTable;