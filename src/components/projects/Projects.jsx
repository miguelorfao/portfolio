import React from "react";
import { Link } from "react-router-dom";
import companyDirectory from "../../public/CompanyDirectory.jpg";
function Projects() {
  return (
    <div>
      <div className="my-3">
        <h3>Projects</h3>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-md-4">
          <div class="card" style={{ width: 400 }}>
            <img src={companyDirectory} alt="..." />
            <div class="card-body text-center">
              <Link to="/CompanyDirectory">Company Directory</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
