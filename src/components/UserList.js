import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/Users";

const UserList = () => {
  const userList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="main mbl">
      <h3 className="main-header mbl">Read Users</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({ id, name, mobile, email }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{mobile}</td>
                <td>{email}</td>
                <td>
                  <Link to={`/edit-user/${id}`}>
                    <IconButton
                      className="icbutton"
                      aria-label="edit"
                      color="primary"
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    className="icbutton"
                    aria-label="delete"
                    color="primary"
                    onClick={() => handleDelete(id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default UserList;
