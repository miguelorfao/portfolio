import React from "react";
import Header from "./header/Header";
import Employees from "./employee/Employees.jsx";

function CompanyDirectory() {
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-employees"
            role="tabpanel"
            aria-labelledby="pills-employees-tab"
            tabindex="0"
          >
            <Employees />
          </div>
          <div
            class="tab-pane fade"
            id="pills-locations"
            role="tabpanel"
            aria-labelledby="pills-locations-tab"
            tabindex="0"
          >
            locations
          </div>
          <div
            class="tab-pane fade"
            id="pills-department"
            role="tabpanel"
            aria-labelledby="pills-department-tab"
            tabindex="0"
          >
            department
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDirectory;
