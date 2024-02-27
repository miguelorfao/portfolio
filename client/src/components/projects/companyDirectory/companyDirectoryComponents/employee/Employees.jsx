import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import ModalBtn from "../modal/ModalBtn";

function Employees() {
  const url = "http://localhost:3001/CompanyDirectory";
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employeeId, setEmployeeId] = useState();

  const [employeeList, setEmployeeList] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    location: "",
  });
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    location: "",
  });

  // get data from db and display
  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      await axios.get(url).then((res) => {
        setEmployee(res.data);

        setLoading();

        setLoading(false);
      });
    } catch (error) {}
  };
  // onchange handler to set value to add new data
  const onchangeHandler = (event) => {
    setEmployeeList((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // set data value on submit to the data base
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, employeeList).then((res) => {
        if (res.data.Status === "Success") {
          fetchEmployee();
        }
      });
    } catch (error) {}
  };

  const editEmployeeHandler = (id) => {
    setEmployeeId(id);
    axios.get(`${url}/${id}`).then((res) => {
      if (res.status === 404) {
        console.log("error");
      }
      return setEmployeeData(res.data[0]);
    });
  };
  // get the value on edit to update data
  const editDataSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${url}/${employeeId}`, employeeData).then((res) => {
        if (res.status === 200) {
          fetchEmployee();
        }
      });
    } catch (error) {}
  };

  // Delete data from db
  const deleteEmployeeHandler = async () => {
    console.log(employeeId);
    await axios.delete(`${url}/${employeeId}`).then((res) => {
      if (res.status === 200) {
        fetchEmployee();
      }
    });
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
      {employee.length === 0 ? (
        <div className="container text-center">
          <h2>No Employee has been found...</h2>
        </div>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <ul class="list-group list-group-flush " style={{ height: "90vh" }}>
          {employee.map((employees) => (
            <li
              class="list-group-item d-flex justify-content-between m-2"
              key={employees.ID}
            >
              <div className="d-flex gap-3">
                <p>{employees.FirstName}</p>
                <p>{employees.LastName}</p>
              </div>
              <div className="d-flex gap-3">
                <ModalBtn
                  onClick={() => {
                    editEmployeeHandler(employees.ID);
                  }}
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
                  onClick={() => {
                    setEmployeeId(employees.ID);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      <Modal modal_id="addEmployee" modal_title="Add Employee">
        <form onSubmit={onSubmitHandler}>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                onChange={onchangeHandler}
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
                name="lastName"
                id="lastName"
                class="form-control"
                placeholder="Last Name"
                aria-describedby="helpId"
                onChange={onchangeHandler}
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
                name="email"
                id="email"
                class="form-control"
                placeholder="First Name"
                aria-describedby="helpId"
                onChange={onchangeHandler}
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
                name="department"
                id="department"
                class="form-control"
                placeholder="Department"
                aria-describedby="helpId"
                onChange={onchangeHandler}
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                class="form-control"
                placeholder="Location"
                aria-describedby="helpId"
                onChange={onchangeHandler}
              />
            </div>
          </div>
          <div className="w-100 d-flex gap-3 justify-content-end">
            <ModalBtn
              type="button"
              className="btn btn-secondary"
              modalDismiss="modal"
              label="Close"
            />
            <ModalBtn
              type="submit"
              className="btn btn-primary"
              modalDismiss="modal"
              label="Save"
            />
          </div>
        </form>
      </Modal>
      <Modal modal_id="employeeEdit" modal_title="Edit Employee">
        <form key={employeeData.ID} onSubmit={editDataSubmit}>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={employeeData.FirstName}
                onChange={(e) => {
                  setEmployeeData({
                    ...employeeData,
                    FirstName: e.target.value,
                  });
                }}
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
                name="lastName"
                id="lastName"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={employeeData.LastName}
                onChange={(e) => {
                  setEmployeeData({
                    ...employeeData,
                    LastName: e.target.value,
                  });
                }}
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
                name="email"
                id="email"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={employeeData.Email}
                onChange={(e) => {
                  setEmployeeData({
                    ...employeeData,
                    Email: e.target.value,
                  });
                }}
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
                name="department"
                id="department"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={employeeData.Department}
                onChange={(e) => {
                  setEmployeeData({
                    ...employeeData,
                    Department: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={employeeData.Location}
                onChange={(e) => {
                  setEmployeeData({
                    ...employeeData,
                    Location: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="w-100 d-flex gap-3 justify-content-end">
            <ModalBtn
              type="button"
              className="btn btn-secondary"
              modalDismiss="modal"
              label="Close"
            />
            <ModalBtn
              type="submit"
              className="btn btn-primary"
              modalDismiss="modal"
              label="Save"
            />
          </div>
        </form>
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
              onClick={deleteEmployeeHandler}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Employees;
