import React from "react";

import Header from "../header/Header";
function Schedule() {
  return (
    <div className="container vh-100">
      {" "}
      <Header>
        <div className="container">
          <div className="row align-items-center justify-content-between vh-100">
            <div className="col-12 col-md-6 text-center">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div class="card border-primary p-2">
                    <h4>Basic</h4>
                    <hr />
                    <div class="card-body">
                      <h3>£500</h3>
                      <div>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div class="card border-primary p-2">
                    <h4>Basic</h4>
                    <hr />
                    <div class="card-body">
                      <h3>£500</h3>
                      <div>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div class="card border-primary p-2">
                    <h4>Basic</h4>
                    <hr />
                    <div class="card-body">
                      <h3>£500</h3>
                      <div>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                        <p className="border-bottom">Text</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="row">
                <form action="">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name=""
                      id=""
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name=""
                      id=""
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name=""
                      id=""
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Product
                    </label>
                    <select class="form-select form-select-lg" name="" id="">
                      <option selected>Select one</option>
                      <option value="">New Delhi</option>
                      <option value="">Istanbul</option>
                      <option value="">Jakarta</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <button className="btn w-100 btn-primary">Buy</button>
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

export default Schedule;
