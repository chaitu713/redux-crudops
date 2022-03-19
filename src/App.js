import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Main />} />
          <Route exact path="/load-users" element={<UserList />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
