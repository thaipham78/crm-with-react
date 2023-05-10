import React, { useState, useEffect } from "react";
import "./ListView.css";
import DataTable from "react-data-table-component";
import { getLists } from "../../.././apis/company.js";
import { useHistory ,useRouteMatch} from "react-router-dom";

const CompanyColumns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Created By",
    selector: (row) => row.name,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
];

const ContactColumns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "First Name",
    selector: (row) => row.first_name,
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Created BY",
    selector: (row) => row.createdBy,
  },
];

const UserColumns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Role",
    selector: (row) => row.role,
  },
];

export default function ListView(props) {
  const [currentEntity, setCurrentEntity] = useState("");
  const [user, setUser] = useState(false);
  const [company, setCompany] = useState(false);
  const [contact, setContact] = useState(false);
  const [tableData, setTableData] = useState({
    columns: [],
    data: [],
  });
  const match = useRouteMatch();
  const history = useHistory();
  function getCompanies() {
    getLists("companies").then((data) => {
      // console.log(data);
      if (data.length > 0) {
        setTableData((prevProps) => ({
          ...prevProps,
          columns: CompanyColumns,
          data: data[0],
        }));
      }
    });
  }

  function getContacts() {
    getLists("contacts").then((data) => {
      // console.log(data);
      if (data.length > 0) {
        setTableData((prevProps) => ({
          ...prevProps,
          columns: ContactColumns,
          data: data[0],
        }));
      }
    });
  }

  function getUsers() {
    getLists("users").then((data) => {
      // console.log(data);
      if (data.length > 0) {
        setTableData((prevProps) => ({
          ...prevProps,
          columns: UserColumns,
          data: data[0],
        }));
      }
    });
  }

  useEffect(() => {
    const handleEntityChange = () => {
      // console.log(props.entity);
      let data = props.entity;
      switch (props.entity) {
        case "Company":
          setCompany((prevProps) => ({
            prevProps,
            data,
          }));
          getCompanies();
          break;
        case "Contact":
          setContact((prevProps) => ({
            prevProps,
            data,
          }));
          getContacts();
          break;
        case "User":
          setUser((prevProps) => ({
            prevProps,
            data,
          }));
          getUsers();
          break;
        default:
          break;
      }
    };
    setCurrentEntity(props.entity);
    handleEntityChange();
  }, [props.entity]);

  function goTo() {
    history.push(`${match.url}/create`);
  }

  // console.log(tableData.data, tableData);
  return (
    <>
      <div>
        {company ? (
          <div>
            <div className="create">
              <button onClick={goTo} type="button" className="btn btn-primary">
                Add {currentEntity}
              </button>
            </div>
            <DataTable columns={tableData.columns} data={tableData.data} />
          </div>
        ) : (
          ""
        )}

        {contact ? (
          <div>
            <div className="create">
              <button onClick={goTo} type="button" className="btn btn-primary">
                Add {currentEntity}
              </button>
            </div>
            <DataTable columns={tableData.columns} data={tableData.data} />
          </div>
        ) : (
          ""
        )}

        {user ? (
          <div>
            <div className="create">
              <button onClick={goTo} type="button" className="btn btn-primary">
                Add {currentEntity}
              </button>
            </div>
            <DataTable columns={tableData.columns} data={tableData.data} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
