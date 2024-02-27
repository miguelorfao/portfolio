import React from "react";

function HeaderTabs({ children }) {
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
      </ul>

      <div>{children}</div>
    </div>
  );
}

export default HeaderTabs;
