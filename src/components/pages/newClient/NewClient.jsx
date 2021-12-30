import React from "react";
import "./newClient.css";

export default function NewClient() {
  return (
    <div className="newClient">
      <div className="newClientTitle">
        <from className="newClientForm">
          <div className="newClientItem">
            <label>Clientname</label>
            <input type="text" placeholder="jon" />
          </div>
          <div className="newClientItem">
            <label>Full name</label>
            <input type="text" placeholder="Jon Snow" />
          </div>
          <div className="newClientItem">
            <label>Adress</label>
            <input type="text" placeholder="Tashkent | UZB" />
          </div>
          <div className="newClientItem">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="newClientItem">
            <label>Phone</label>
            <input type="text" placeholder="+998 93 007 0809" />
          </div>
          <div className="newClientItem">
            <label>Job responsibilities </label>
            <input type="text" placeholder="Director" />
          </div>
          <div className="newClientItem">
            <label>Fax</label>
            <input type="text" placeholder="+9989 89 899 99 99" />
          </div>
          <div className="newClientItem">
            <label>Active</label>
            <select className="newClientSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newClientButton">Create</button>
        </from>
      </div>
    </div>
  );
}
