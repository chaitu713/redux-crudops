import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { editUser } from "../redux/Users";

const EditUser = () => {
  const { pathname } = useLocation();

  const userId = parseInt(pathname.replace("/edit-user/", ""));
  console.log(typeof userId);

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  console.log(typeof user.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [mobile, setMobile] = useState(user.mobile);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name.match(/^[A-Za-z_ ]{7,29}$/) &&
      mobile.match(/^[0-9]{10}$/) &&
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      dispatch(
        editUser({
          id: userId,
          name,
          mobile,
          email,
        })
      );

      setError(null);
      navigate("/load-users");
    } else if (!name || !email || !mobile) {
      setError(alert("Fill in all the fields"));
    } else {
      if (!name.match(/^[A-Za-z_ ]{7,29}$/)) {
        alert("Name should be minimum of 7 chars and maximum of 29 chars...");
        setName("");
      }
      if (!mobile.match(/^[0-9]{10}$/)) {
        alert(
          "Mobile Number should be 10 chars of length and contain only numbers..."
        );
        setMobile("");
      }
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        alert("Email did not match the required pattern...");
        setEmail("");
      }
    }
  };

  return (
    <div className="main">
      <h3 className="main-header">Edit User</h3>
      <form className="create-frm">
        <div className="first-frm">
          <label for="nameInput">Name</label>
          <input
            className="txtfield"
            type="text"
            placeholder="Enter Name..."
            id="nameInput"
            onChange={handleName}
            value={name}
            required
          />
          <label for="telInput">Mobile</label>
          <input
            className="txtfield"
            type="tel"
            placeholder="Enter Mobile Number..."
            id="telInput"
            onChange={handleMobile}
            value={mobile}
            required
          />
          <label for="emailInput">Email</label>
          <input
            className="txtfield"
            type="email"
            placeholder="Enter Email..."
            id="emailInput"
            onChange={handleEmail}
            value={email}
            required
          />
          {error && error}
          <button onClick={handleClick} className="btn">
            Save user
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
