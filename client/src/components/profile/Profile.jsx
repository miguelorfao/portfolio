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
    <div>
      <Header>
        <div className="text-center">
          <div className="row align-items-center justify-content-center my-5 mx-auto">
            <div className="col-12 col-md-4">
              <img src={Img} alt="logo" className="rounded-circle" />
            </div>
            <div className="col-12 col-md-8">
              <h2 className="text-decoration-underline">About Me</h2>
              <p>
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
              <button
                className="btn btn-outline-info w-100 mb-3"
                onClick={onClickEvent}
              >
                Download CV
              </button>
            </div>

            <hr />
          </div>
          <div className="row">
            <div className="col">
              {" "}
              <h2 className="text-decoration-underline">Skills / Tools</h2>
              <hr />
              <div className="d-flex justify-content-around">
                <h4 className="text-uppercase"> html 5</h4>
                <h4 className="text-uppercase"> css</h4>
                <h4 className="text-uppercase"> js</h4>
                <h4 className="text-uppercase"> react</h4>
                <h4 className="text-uppercase"> bootstrap</h4>
              </div>
              <hr />
            </div>
            <div className="col">
              {" "}
              <h2 className="text-decoration-underline">Coding Traineeship</h2>
              <hr />
              <div className="">
                <h3>IT Career Switch</h3>
                <p>
                  Coding Training -Full stack developer 1 Year Program During
                  the traineeship I had to demonstrate a very competent level of
                  the following programming languages and technical skills HTML,
                  CSS3, JAVASCRIPT PHP, SQL, REACT, jQuery JAVA, PYTHON, C#
                  NODE.JS COMMAND LINE GIT, GITHUB REMOTE API ACCESS
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Profile;
