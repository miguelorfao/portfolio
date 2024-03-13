import React from "react";
import "./HomePage.css";
import Img from "../../public/AdobeStock_294370917.jpeg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="ps-3 pe-3 home-page">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-12 col-md-6">
          {" "}
          <div className="text-center">
            <div className="mb-4">
              <h1 className="text-uppercase">
                miguel <span className="text-danger">orfao</span>{" "}
              </h1>
            </div>
            <hr className="mb-3" />
            <div className="d-flex justify-content-around mb-5">
              <i class="fa-brands fa-html5 fa-2x"></i>
              <i class="fa-brands fa-react fa-2x"></i>
              <i class="fa-brands fa-js fa-2x"></i>
              <i class="fa-brands fa-css3 fa-2x"></i>
              <i class="fa-brands fa-bootstrap fa-2x"></i>
            </div>
            <div className="d-flex  justify-content-around text-center">
              <Link to="/Profile" className="btn btn-outline-primary w-25">
                Visit
              </Link>
              <Link to="/Contact" className="btn btn-outline-primary w-25">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block img">
          <img src={Img} alt="" className="w-100 vh-100" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
