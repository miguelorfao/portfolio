import React from "react";
import "./HomePage.css";

import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-page d-flex justify-content-center align-items-center">
      <div className="">
        <div class="stars1"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
        <div className="container text-center">
          <div className="mb-4">
            <h1 className="text-uppercase">
              miguel <span>orfao</span>{" "}
            </h1>
          </div>
          <hr className="mb-3" />
          <div className="d-flex justify-content-around mb-5">
            <i class="fa-brands fa-html5 fa-4x"></i>

            <i class="fa-brands fa-react fa-4x"></i>
            <i class="fa-brands fa-js fa-4x"></i>
            <i class="fa-brands fa-css3 fa-4x"></i>
            <i class="fa-brands fa-bootstrap fa-4x"></i>
          </div>
          <div className="text-center">
            <Link
              to="/Profile"
              className="text-uppercase text-decoration-none btn-outline-info"
            >
              <h4>Visit</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
