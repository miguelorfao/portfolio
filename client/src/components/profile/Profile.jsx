import React from "react";
import Header from "../header/Header";
import Img from "../../public/profile.jpeg";
import PDF from "../../public/Miguel_Orfao_CV.pdf";

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
      <div className="container">
        <div className="mt-4">
          <h2>About Me</h2>
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
                I come from a background in CNC programming where I was able to
                develop my technical and design skills. However, I have always
                been interested in development and I am now looking to establish
                a career in the industry. This interest has led me to recently
                graduate from a coding Traineeship as a full stack developer
                including completing 2 real-world projects successfully to
                specification using a wide range of programming languages. I
                have a logical and practical mindset with excellent
                problem-solving skills and a drive to succeed. I am confident
                that I will make a valuable addition to your development team.
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
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <h3>Services</h3>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <h4 className="border-bottom">Web Development</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nemo, reprehenderit a officia reiciendis
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </Header>
  );
}

export default Profile;
