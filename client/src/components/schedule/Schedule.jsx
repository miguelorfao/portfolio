import React from "react";

import Header from "../header/Header";
function Schedule() {
  return (
    <Header>
      <div className="schedule">
        <div className="my-3">
          <h3>Schedule</h3>
        </div>
        <hr />
        <div class="row justify-content-center align-items-center shadow rounded">
          <div class="col-5 text-center">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              reiciendis iste voluptatem blanditiis, accusamus error repudiandae
              perspiciatis consectetur dolor minus pariatur at sequi aspernatur
              laudantium a incidunt iusto explicabo eos?
            </p>
          </div>
          <div class="col-4">
            <form action="">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">last Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">Email Address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">Subject</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">Date</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="time"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                />
                <label for="formId1">Time</label>
              </div>
              <div class="form-floating mb-3">
                <button className="btn w-100 btn-outline-info">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Schedule;
