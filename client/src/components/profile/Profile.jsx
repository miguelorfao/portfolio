import React from "react";
import Header from "../header/Header";
import Img from "../../public/profile.jpeg";
import PDF from "../../public/Miguel_Orfao_CV.pdf";
import { Link } from "react-router-dom";
import "./Profile.css";
function Profile() {
  const onClickEvent = () => {
    const pdfDowload = document.createElement("a");
    pdfDowload.href = PDF;
    pdfDowload.setAttribute("download", "Miguel_Orfao_CV.pdf");
    document.body.appendChild(pdfDowload);
    pdfDowload.click();
    pdfDowload.remove();
  };
  return (
    <Header>
      <div className="container profile">
        <div className="mt-4 d-flex justify-content-between">
          <h2>About Me</h2>
          <button className="btn btn-outline-info mb-3" onClick={onClickEvent}>
            Download CV
          </button>
        </div>
        <hr />
        <div>
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <h3>About Myself</h3>
            </div>
            <div className="col-12 col-md-6">
              <p>
                {" "}
                With a background rooted in CNC programming, I have cultivated a
                robust set of technical skills and refined my design
                capabilities. However, my inherent interest in development has
                motivated me to pivot towards establishing a career in this
                dynamic industry. Recently completing a comprehensive coding
                Traineeship as a full stack developer, I have successfully
                delivered two real-world projects, meticulously adhering to
                specifications utilizing a diverse array of programming
                languages. Possessing a logical and practical mindset, coupled
                with exemplary problem-solving abilities, I am driven by a
                fervent desire to excel. I am confident that my expertise and
                dedication render me a valuable asset to your esteemed
                development team.
              </p>
            </div>
          </div>
          <hr />
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <h3>TimeLine</h3>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <p>IT Career Switch</p>
                    <p>
                      {" "}
                      Coding Training -Full stack developer 1 Year Program
                      During the traineeship I had to demonstrate a very
                      competent level of the following programming languages and
                      technical skills HTML, CSS3, JAVASCRIPT PHP, SQL, REACT,
                      jQuery JAVA, PYTHON, C# NODE.JS COMMAND LINE GIT, GITHUB
                      REMOTE API ACCESS
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <hr />
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <h3>Skills</h3>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-around">
                <h4 className="text-uppercase"> html 5</h4>
                <h4 className="text-uppercase"> css</h4>
                <h4 className="text-uppercase"> js</h4>
                <h4 className="text-uppercase"> react</h4>
                <h4 className="text-uppercase"> bootstrap</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center gap-5">
            <Link to="/Projects" className="btn btn-primary w-50">
              Projects
            </Link>
            <Link to="/Contact" className="btn btn-primary w-50">
              Contact
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </Header>
  );
}

export default Profile;
