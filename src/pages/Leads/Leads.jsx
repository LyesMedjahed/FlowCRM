import { useState } from "react";
import { leads as initialLeads } from "../../data/leads";
import './Leads.css'

function Leads() {

  const [leads, setLeads] = useState(initialLeads);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");

  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const addLead = () => {

    if (!name) return;

    const newLead = {
      id: Date.now(),
      name,
      contact,
      status: "New",
      value: Number(value) || 0
    };

    setLeads([...leads, newLead]);

    setName("");
    setContact("");
    setValue("");
  };

  const filteredLeads = leads.filter(lead => {

    const matchSearch = lead.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "All" || lead.status === filterStatus;

    return matchSearch && matchStatus;
  });

  return (
    <div className="leads-container">

      <h1 className="leads-title">Leads</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search lead..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
      </select>

      <hr />

      {/* ADD LEAD */}
      <h3>Add Lead</h3>

      <input
        placeholder="Company"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <input
        type="number"
        placeholder="Potential Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn-add" onClick={addLead}>Add Lead</button>

      <hr />

      {/* TABLE */}
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th>Company</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {filteredLeads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.contact}</td>
              <td>{lead.status}</td>
              <td>{lead.value}€</td>
              <td>
                <button className="btn-delete" onClick={() => deleteLead(lead.id)}>
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

export default Leads;