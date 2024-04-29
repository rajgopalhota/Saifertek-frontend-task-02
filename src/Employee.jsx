import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import employees from "./employees";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      console.log("Delete employee with id:", id);
      const updatedData = employeeData.filter((emp) => emp.id !== id);
      localStorage.setItem("employees", JSON.stringify(updatedData));
      setEmployeeData(updatedData);
    }
  };
  

  const getPosition = (age) => {
    return age > 40 ? "Sr. Employee" : "Jr. Employee";
  };

  useEffect(() => {
    // Check if data exists in local storage, otherwise use initial data from employees array
    const storedData = JSON.parse(localStorage.getItem("employees"));
    if (storedData) {
      setEmployeeData(storedData);
    } else {
      localStorage.setItem("employees", JSON.stringify(employees));
      setEmployeeData(employees);
    }
  }, []);

  return (
    <div className="container">
      <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>
        Employee Component
      </h2>
      <hr />
      <div
        style={{ marginTop: "10px", marginBottom: "10px", textAlign: "right" }}
      >
        <Link to="/employee/add" className="btn btn-primary">
          Add Employee
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{employee.id}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.Department}</td>
              <td>${employee.Salary}</td>
              <td>{getPosition(employee.Age)}</td>
              <td className="actionBtns">
                <Link
                  to={`/employee/edit/${employee.id}`}
                  className="btn btn-info mr-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
