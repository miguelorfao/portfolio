import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import companyDirectory from "../../public/CompanyDirectory.jpg";
import budgetTracker from "../../public/budgetTracker.png";
import "./Project.css";
function Projects() {
  return (
    <Header>
      <div className="container project">
        <div className="my-3">
          <h3>Projects</h3>
        </div>
        <hr />
        <div className="p-5">
          <div className="row justify-content-center gap-2">
            <div className="col-12 col-md-4">
              <div class="card border-primary p-2">
                <img src={companyDirectory} alt="..." />
                <hr />
                <div class="card-body text-center">
                  <Link to="/CompanyDirectory">
                    <h4>Company Directory</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div class="card border-primary p-2">
                <img src={budgetTracker} alt="..." />
                <hr />
                <div class="card-body text-center">
                  <Link to="/ExpenseTracker">
                    <h4>Budget Tracker</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Projects;
