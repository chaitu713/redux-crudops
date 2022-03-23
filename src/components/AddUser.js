import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/Users";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersLength = useSelector((state) => state.users.length);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name.match(/^[A-Za-z_ ]{7,29}$/) &&
      mobile.match(/^[0-9]{10}$/) &&
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      dispatch(
        addUser({
          id: usersLength + 1,
          name,
          mobile,
          email,
        })
      );

      setError(null);
      navigate("/");
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

    // setName("");
    // setMobile("");
    // setEmail("");
  };

  return (
    <div className="main">
      <h3 className="main-header">Create User</h3>
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
            id="phone"
            maxLength={10}
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
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
