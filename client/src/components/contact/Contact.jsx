import React, { useRef, useState } from "react";
import Header from "../header/Header";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [errorSuccess, setErrorSuccess] = useState("");
  const linkedInOnclick = () => {
    window.location.href =
      "https://www.linkedin.com/in/miguel-orfao-5375a0203/";
  };
  const gitHubOnclick = () => {
    window.location.href = "https://github.com/miguelorfao/";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k1rs0ke", "template_2rc5yrk", form.current, {
        publicKey: "R0KjiFmaLaDn2ZTbe",
      })
      .then(
        (res) => {
          setTimeout(function () {
            console.log(res.status);
            setErrorSuccess(res.status);
          }, 1000);
          setTimeout(function () {
            e.target.reset();
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorSuccess(error);
        }
      );
  };
  return (
    <div>
      <Header>
        <div class="stars1"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
        {errorSuccess === 200 ? (
          <div class="alert alert-dismissible alert-success">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Thank you your Message has been sent!</strong>
          </div>
        ) : (
          <div class="alert alert-dismissible alert-danger d-none">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Oh snap!</strong>{" "}
            <a href="#" class="alert-link">
              Change a few things up
            </a>{" "}
            and try submitting again.
          </div>
        )}

        <div className="container">
          <div className="vh-100">
            <div className="row justify-content-center align-items-center w-100 text-center h-25">
              <h3>Get In Touch with Us</h3>
            </div>
            <hr />
            <form ref={form} onSubmit={sendEmail} className="h-50 p-3">
              <div class="row justify-content-center align-items-center g-2 h-50">
                <div class="col-12 col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                    <label for="formId1">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                    <label for="email">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                    <label for="email">Subject</label>
                  </div>
                  <div className=" h-25 d-flex justify-content-around align-items-center d-none d-md-block d-md-flex">
                    <div className="text-center" onClick={linkedInOnclick}>
                      <i class="fa-brands fa-linkedin fa-3x text-primary"></i>
                      <p>Linkedin</p>
                    </div>
                    <div className="text-center" onClick={gitHubOnclick}>
                      <i class="fa-brands fa-github fa-3x text-primary"></i>
                      <p>GitHub</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="10"
                      required
                    ></textarea>
                    <div className="w-100 mt-2">
                      <button className="btn btn-outline-info w-100">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-25 d-flex justify-content-around align-items-center mt-3 d-block d-md-none">
                  <div className="text-center" onClick={linkedInOnclick}>
                    <i class="fa-brands fa-linkedin fa-3x text-primary"></i>
                    <p>Linkedin</p>
                  </div>
                  <div className="text-center" onClick={gitHubOnclick}>
                    <i class="fa-brands fa-github fa-3x text-primary"></i>
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Contact;
