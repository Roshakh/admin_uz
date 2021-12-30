import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Asosiy from "./components/pages/home/Asosiy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ClientList from "./components/pages/clientList/ClientList";
import Client from "./components/pages/client/Client";
import NewClient from "./components/pages/newClient/NewClient";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Asosiy />} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/users/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/clients" element={<ClientList/>} />
          <Route path="/clients/:clientId" element={<Client/>} />
          <Route path="/newClient" element={<NewClient/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
