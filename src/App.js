import React from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import data from "./data.json";

function App() {
  const columns = [
    { name: "Name", selector: "name", sortable: true },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    // firstdata
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "DOB",
      selector: "dob",
    },
  ];
  return (
    <div className="App">
      <h3>DataTable in React</h3>
      <DataTable
        title="Employee"
        columns={columns}
        data={data}
        pagination
        highlightOnhover
        style={{ color: "red" }}
      />
    </div>
  );
}

export default App;
