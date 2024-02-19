import React from "react";

function Header({ children }) {
  return (
    <div className="container w-100 mt-1">
      <ul
        class="nav nav-pills d-flex justify-content-around align-items-center"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-employees-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-employees"
            type="button"
            role="tab"
            aria-controls="pills-employees"
            aria-selected="false"
          >
            Employees
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-locations-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-locations"
            type="button"
            role="tab"
            aria-controls="pills-locations"
            aria-selected="false"
          >
            Locations
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-department-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-department"
            type="button"
            role="tab"
            aria-controls="pills-department"
            aria-selected="false"
            department
          >
            Department
          </button>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
}

export default Header;
