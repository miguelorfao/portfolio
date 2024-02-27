import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import companyDirectory from "../../public/CompanyDirectory.jpg";
function Projects() {
  return (
    <div>
      <Header>
        <div className="my-3">
          <h3>Projects</h3>
        </div>
        <hr />
        <div className="row">
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
      </Header>
    </div>
  );
}

export default Projects;
