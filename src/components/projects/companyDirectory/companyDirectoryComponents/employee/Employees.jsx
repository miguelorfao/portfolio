import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import ModalBtn from "../modal/ModalBtn";

function Employees() {
  const [employee, setEmployee] = useState([]);
  const [employeeID, setEmployeeID] = useState("");

  useEffect(() => {
    setEmployee([
      { id: 1, FirstName: "Miguel", LastName: "Orfao" },
      { id: 2, FirstName: "Danile", LastName: "Orfao" },
      { id: 3, FirstName: "Joe", LastName: "Orfao" },
      { id: 4, FirstName: "Mike", LastName: "Orfao" },
    ]);
  }, []);

  const onClickEditHandler = (id) => {
    setEmployeeID(id);
  };
  const onClickDeleteHandler = (id) => {
    setEmployeeID(id);
  };
  return (
    <div>
      <div className="mb-3 ms-2">
        <ModalBtn
          label="Add Employee"
          className="btn bg-primary"
          modal="modal"
          modalId="#addEmployee"
          type="button"
        />
      </div>
      <ul class="list-group list-group-flush " style={{ height: "90vh" }}>
        {employee.map((employees) => (
          <li
            class="list-group-item d-flex justify-content-between m-2"
            key={employees.id}
          >
            <div className="d-flex gap-3">
              <p>{employees.FirstName}</p>
              <p>{employees.LastName}</p>
            </div>
            <div className="d-flex gap-3">
              <ModalBtn
                label="Edit"
                className="btn btn-outline-primary"
                modal="modal"
                modalId="#employeeEdit"
                type="button"
              />
              <ModalBtn
                label="Delete"
                className="btn btn-outline-danger"
                modal="modal"
                modalId="#employeeDelete"
                type="button"
              />
            </div>
          </li>
        ))}
      </ul>
      <Modal modal_id="addEmployee" modal_title="Add Employee">
        <form>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Department
              </label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </div>
        </form>
        <div className="w-100 d-flex gap-3 justify-content-end">
          <ModalBtn
            type="button"
            className="btn btn-secondary"
            modalDismiss="modal"
            label="Close"
          />
          <ModalBtn
            type="button"
            className="btn btn-primary"
            modalDismiss="modal"
            label="Save"
          />
        </div>
      </Modal>
      <Modal modal_id="employeeEdit" modal_title="Edit Employee">
        <form class="d-flex">
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Inline Form
              </label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
          </div>
        </form>
        <div className="w-100 d-flex gap-3 justify-content-end">
          <ModalBtn
            type="button"
            className="btn btn-secondary"
            modalDismiss="modal"
            label="Close"
          />
          <ModalBtn
            type="button"
            className="btn btn-primary"
            modalDismiss="modal"
            label="Save"
          />
        </div>
      </Modal>
      <Modal modal_id="employeeDelete" modal_title="Delete Employee">
        <form className="text-center">
          <div class="mb-3">
            <p>Are you sure you want to delete the following employee?</p>
          </div>

          <div className="w-100 d-flex gap-3 justify-content-end">
            <ModalBtn
              type="button"
              className="btn btn-secondary"
              modalDismiss="modal"
              label="Close"
            />
            <ModalBtn
              type="button"
              className="btn btn-danger"
              modalDismiss="modal"
              label="Delete"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Employees;
