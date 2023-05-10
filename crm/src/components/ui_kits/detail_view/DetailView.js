import React, { useState, useEffect } from "react";
import "./DetailView.css";
import { useParams } from "react-router-dom";
import { getDetail } from "../../.././apis/company.js";
import { useHistory } from "react-router-dom";

export default function DetailView(props) {
  const [currentEntity, setCurrentEntity] = useState("");
  const [detailData, setDetaildata] = useState({});
  let { id } = useParams();
  const history = useHistory();

  function getCompany(id) {
    getDetail("companies", id).then((data) => {
      // console.log(data);
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  function getContact(id) {
    getDetail("contacts", id).then((data) => {
      // console.log(data);
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  function getUser(id) {
    getDetail("users", id).then((data) => {
      // console.log(data);
      if (data) {
        setDetaildata((prevProps) => ({
          ...prevProps,
          ...data,
        }));
      }
    });
  }

  useEffect(() => {
    const handleEntityChange = () => {
      switch (props.entity) {
        case "Companies":
          getCompany(id);
          break;
        case "Contacts":
          getContact(id);
          break;
        case "Users":
          getUser(id);
          break;
        default:
          break;
      }
    };
    setCurrentEntity(props.entity);
    handleEntityChange();
  }, [props.entity, id]);

  function goTo() {
    // console.log(`/${currentEntity.toLocaleLowerCase()}/update/${id}`);
    history.push(`/${currentEntity.toLocaleLowerCase()}/update/${id}`);
  }

  return (
    <>
      <div className="Update">
        <button onClick={goTo} type="button" className="btn btn-primary">
          Update {currentEntity}
        </button>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{currentEntity} Detail</h5>

          {detailData
            ? Object.entries(detailData).map(([key, value], index) => {
                return (
                  <>
                    <p key={index} className="card-text">
                      {key} : <span key={index}>{value} </span>
                    </p>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
