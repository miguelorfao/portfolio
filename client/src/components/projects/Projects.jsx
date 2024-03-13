import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import companyDirectory from "../../public/CompanyDirectory.jpg";
function Projects() {
  return (
    <Header>
      <div className="container">
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
                  <Link to="/CompanyDirectory">Company Directory</Link>
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
