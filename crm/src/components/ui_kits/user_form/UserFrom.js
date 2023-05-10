import React, { useState, useEffect } from "react";
import "./UserForm.css";
import { useParams } from "react-router-dom";
import { getDetail, add, update } from "../../.././apis/company.js";

export default function UserForm(props) {
  const [userForm, setUserForm] = useState({
    name: "",
    password: "",
    role: "",
    permissions: [],
  });
  const permissions = ["Manage Contact", "Manage Company", "Manage User"];

  let { id } = useParams();
  const [currentAction, setCurrentAction] = useState("");
  const [detailData, setDetaildata] = useState({});

  function getUser(id) {
    getDetail("users", id).then((data) => {
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  function addUser(data) {
    // console.log(data);
    add("users", data).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

  function updateUser(data, id) {
    update("users", data, id).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

  useEffect(() => {
    const updateForm = () => {
      setUserForm((prevProps) => ({
        ...prevProps,
        ...detailData,
      }));
    };
    updateForm();
  }, [detailData]);

  useEffect(() => {
    setCurrentAction(props.action);
    if (props.action === "Update") {
      getUser(id);
    }
  }, [props.action]);

  const handleCheck = (event) => {
    var updatedList = [...userForm.permissions];
    if (event.target.checked) {
      updatedList = [...userForm.permissions, event.target.value];
    } else {
      updatedList.splice(userForm.permissions.indexOf(event.target.value), 1);
    }
    setUserForm((prevProps) => ({
      ...prevProps,
      permissions: updatedList,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentAction == "Update") {
      updateUser(userForm, id);
    } else {
      addUser(userForm);
    }
    console.log(userForm);
  };

  const isChecked = (item) => {
    return userForm.permissions.some((data) => (data === item ? true : false));
  };

  return (
    <>
      <div className="contactForm w-80 mt-4">
        <h1 className="w-50 mx-auto text-center">{currentAction} User</h1>
        <form onSubmit={handleSubmit} className="w-50 mx-auto" id="contact">
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="contactName"
              name="name"
              value={userForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
              value={userForm.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <select
              name="role"
              value={userForm.role}
              onChange={handleInputChange}
              className="form-select"
            >
              <option>Select Roles</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="d-flex my-4 justify-content-between">
            {permissions.map((item, index) => (
              <div className="form-check " key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item}
                  id="flexCheckDefault"
                  onChange={handleCheck}
                  checked={isChecked(item)}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {item}
                </label>
              </div>
            ))}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {currentAction}
          </button>
        </form>
      </div>
    </>
  );
}
