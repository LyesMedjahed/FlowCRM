import './Clients.css'
import { useState, useEffect } from "react";
import { clients as initialClients } from "../../data/mockData";

function Clients() {

 { /*const [clients, setClients] = useState(initialClients);*/}
  const [clients, setClients] = useState(() => {
  const saved = localStorage.getItem("clients");
  return saved ? JSON.parse(saved) : initialClients;
});
   
  useEffect(() => {
  localStorage.setItem("clients", JSON.stringify(clients));
}, [clients]);
  
{/*get colors */}
  const getStatusColor = (status) => {
  if (status === "Won") return "green";
  if (status === "Contacted") return "orange";
  if (status === "New") return "blue";
};

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState("New");
  const [newRevenue, setNewRevenue] = useState("");

  // supprimer client
  const deleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  // ajouter client
  const addClient = () => {

    if (!newName) return;

    const newClient = {
      id: Date.now(),
      name: newName,
      status: newStatus,
      revenue: Number(newRevenue) || 0
    };

    setClients([...clients, newClient]);

    setNewName("");
    setNewRevenue("");
  };

  // filtre + recherche
  const filteredClients = clients.filter(client => {

    const matchSearch = client.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "All" || client.status === filterStatus;

    return matchSearch && matchStatus;
  });

  return (
    <div className='client-container'>

      <h1 className='client-title'>Clients</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search client..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">--- Filter (All) ---</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Won">Won</option>
      </select>

      <hr />

      {/* ADD CLIENT */}
      <h3 className='add-client'>Add Client</h3>

      <input
        placeholder="Company name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <select
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
      >
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Won">Won</option>
      </select>

      <input
        placeholder="Revenue"
        type="number"
        value={newRevenue}
        onChange={(e) => setNewRevenue(e.target.value)}
      />

      <button className='btn-add' onClick={addClient}>Add</button>

      <hr />

      {/* CLIENT LIST */}
      <table className='table'>

        <thead className='thead'>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>Revenue</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredClients.map(client => (
            <tr key={client.id}>

              <td>{client.name}</td>
              <td style={{color: getStatusColor(client.status)}}>{client.status}</td>
              <td>{client.revenue}€</td>

              <td>
                <button className='btn-delete' onClick={() => deleteClient(client.id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Clients;