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
    <div className="">
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
      <Header>
        <div className="container">
          <div>
            {" "}
            <div className="row justify-content-center mt-5">
              <div className="col-12">
                <h2>Contact Me</h2>
                <hr />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-5">
                <h3>Get in touch</h3>

                <div className="d-flex gap-2">
                  <h4>Email:</h4>
                  <p>Orfao.miguel@gmail.com</p>
                </div>
                <div className="d-flex gap-2">
                  <h4>Phone:</h4>
                  <p>+44 75235 99307</p>
                </div>
              </div>
              <div className="col-12 col-md-5">
                {" "}
                <form ref={form} onSubmit={sendEmail}>
                  <div class="row justify-content-center align-items-center g-2 h-50">
                    <div className="col-12 col-md-6">
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
                    </div>
                    <div className="col-12 col-md-6">
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
                    </div>
                    <div className="co-12 col-md-12">
                      <div class="mb-3">
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          rows="5"
                          required
                          placeholder="Message"
                        ></textarea>
                        <div className="w-100 mt-2">
                          <button className="btn btn-outline-primary w-100">
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
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Contact;
