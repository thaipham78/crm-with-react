import React, { useState, useEffect } from "react";
import "./CompanyForm.css";
import { useParams } from "react-router-dom";
import { getDetail, add, update } from "../../.././apis/company.js";

export default function CompanyForm(props) {
  const [companyForm, setCompanyForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let { id } = useParams();
  const [currentAction, setCurrentAction] = useState("");
  const [detailData, setDetaildata] = useState({});

  function getCompany(id) {
    getDetail("companies", id).then((data) => {
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  function addCompany(data) {
    console.log(data);
    add("companies", data).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

  function updateCompany(data, id) {
    update("companies", data, id).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

  useEffect(() => {
    const updateForm = () => {
      // console.log(detailData, "four");
      setCompanyForm((prevProps) => ({
        ...prevProps,
        ...detailData,
      }));
    };
    updateForm();
  }, [detailData]);

  useEffect(() => {
    // console.log("useEffect logic ran", props.action, id);
    setCurrentAction(props.action);
    if (props.action === "Update") {
      getCompany(id);
    }
  }, [props.action]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompanyForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentAction == "Update") {
      updateCompany(companyForm, id);
    } else {
      addCompany(companyForm);
    }
    console.log(companyForm);
  };
  
  return (
    <>
      <div className="companyForm w-80 mt-4">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <h1 className="w-50 mx-auto text-center">{currentAction} company</h1>
        <form onSubmit={handleSubmit} className="w-50 mx-auto" id="company">
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="companyName"
              name="name"
              value={companyForm ? companyForm.name : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              id="companyPhone"
              name="phone"
              value={companyForm.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              id="companyEmail"
              value={companyForm.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {currentAction}
          </button>
        </form>
      </div>
    </>
  );
}
