import "./Settings.css";
import { useState } from "react";

export default function Settings() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = async () => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email
        })
      });

      const data = await response.json();

      alert("Profile updated");

    } catch (error) {
      console.error(error);
    }
  };

/*password */
const [password, setPassword] = useState("");

const changePassword = async () => {

  await fetch("/api/user/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password
    })
  });

  alert("Password updated");

};
/*company + currency */
const [company, setCompany] = useState("");
const [currency, setCurrency] = useState("EUR");

const saveOrganization = async () => {

  await fetch("/api/organization/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      company,
      currency
    })
  });

};

/*export data */
const exportData = () => {
  window.open("/api/export-data");
};
/*dowload */
const dowloadcsv = () => {
    window.open("api/dowload-data")
}
/*delete all */
const deleteAllData = async () => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete all data?"
  );

  if (!confirmDelete) return;

  await fetch("/api/delete-data", {
    method: "DELETE"
  });
  alert("All data deleted");
};

    return (
         <div className="settings-container">

            <h1 className="settings-title">Settings</h1>
            <hr />

            <h3 className="section profile">Profile:</h3>
            <div className="settings-profile">
                <label htmlFor="Name" className="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              /> 
              <br />
              <hr />

              <label htmlFor="email" className="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              <hr />

              <label htmlFor="password" className="psw">Change Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
              />

              <button className="btn-add" onClick={changePassword}>Change Password</button>
              <br />
              <hr />
              <button className="btn-save" onClick={handleSave}> Save Changes</button>
            </div>

            <hr />
            <h3 className="section organization">Organization:</h3>
            <div className="settings-organization">
                <label htmlFor="name" className="company">Company Name</label>
                <input type="text" name="text" placeholder="ACME Agency" />
                <br />
                <hr />

                <label htmlFor="currency" className="currency">Currency</label>
                <select name="currency">
                    <option value="EUR">EUR €</option>
                    <option value="USD">USD $</option>
                    <option value="EUR">GBP £</option>
                </select>
                <select name="timezone">
                    <option value="paris">Europe/ Paris</option>
                    <option value="london">Europe/ London</option>
                    <option value="ny">America/ New York</option>
                </select>
                <br />
                <hr />
                 
                <button className="btn-save" onClick={handleSave}> Save</button>
            </div>
            <hr />

            <h3 className="section data">Data</h3>
            <div className="settings-data">
                <button onClick={exportData} className="export">Export All Data</button>
                <button onClick={dowloadcsv} className="dowload">Download CSV</button>
            
            <hr />

            <h4 className="danger">Danger Zone</h4>
            <button onClick={deleteAllData} className="btn-delete">Delete All Data</button>
            </div>
      </div>
    )
}