import React from "react";
import employeeSVG from "./emp.jpg";

const Home = () => {
  return (
    <div className="hcontainer">
      <div className="content">
        <h2>Welcome to Employee Management System</h2>
        <p>
          Manage your employees efficiently with our user-friendly system.
        </p>
      </div>
      <div className="floating-images">
        <img src={employeeSVG} alt="Employee" />
      </div>
    </div>
  );
};

export default Home;
