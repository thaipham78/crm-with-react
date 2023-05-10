import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import { useParams } from "react-router-dom";
import { getDetail, add, update } from "../../.././apis/company.js";

export default function ContactForm(props) {
  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_id: "",
  });
  let { id } = useParams();
  const [currentAction, setCurrentAction] = useState("");
  const [detailData, setDetaildata] = useState({});
  const [selectedValue, setSelectedValue] = useState("0");

  function getContact(id) {
    getDetail("contacts", id).then((data) => {
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  function addContact(data) {
    // console.log(data);
    add("contacts", data).then((data) => {
      // console.log(data);
      if (data) {
        console.log(data);
      }
    });
  }

  function updateContact(data, id) {
    update("contacts", data, id).then((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

  useEffect(() => {
    const updateForm = () => {
      setContactForm((prevProps) => ({
        ...prevProps,
        ...detailData,
      }));
      let company_id = detailData.company_id;
      if (company_id) {
        setSelectedValue(company_id);
      }
    };
    updateForm();
  }, [detailData]);

  useEffect(() => {
    setCurrentAction(props.action);
    if (props.action === "Update") {
      getContact(id);
    }
  }, [props.action]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentAction == "Update") {
      updateContact(contactForm, id);
    } else {
      addContact(contactForm);
    }
  };

  return (
    <>
      <div className="contactForm w-80 mt-4">
        <h1 className="w-50 mx-auto text-center">{currentAction} contact</h1>
        <form onSubmit={handleSubmit} className="w-50 mx-auto" id="contact">
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="contactName"
              name="first_name"
              value={contactForm.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="contactName"
              name="last_name"
              value={contactForm.last_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <select
              name="company_id"
              // value={contactForm.company_id}
              onChange={handleInputChange}
              className="form-select"
              value={selectedValue}
            >
              <option disabled value="0">
                Select Company
              </option>
              <option value="1">Comapany 1</option>
              <option value="2">Comapany 2</option>
              <option value="3">Comapany 3</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              id="contactPhone"
              name="phone"
              value={contactForm.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="contactEmail"
              name="email"
              value={contactForm.email}
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
