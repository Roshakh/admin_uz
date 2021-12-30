import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <div className="newUserTitle">
        <from className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="jon" />
          </div>
          <div className="newUserItem">
            <label>Full name</label>
            <input type="text" placeholder="Jon Snow" />
          </div>
          <div className="newUserItem">
            <label>Adress</label>
            <input type="text" placeholder="Tashkent | UZB" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+998 93 007 0809" />
          </div>
          <div className="newUserItem">
            <label>Job responsibilities </label>
            <input type="text" placeholder="Director" />
          </div>
          <div className="newUserItem">
            <label>Fax</label>
            <input type="text" placeholder="+9989 89 899 99 99" />
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </from>
      </div>
    </div>
  );
}
