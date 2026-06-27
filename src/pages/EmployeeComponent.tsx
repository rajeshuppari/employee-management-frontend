import { useEffect, useState } from "react";
import { createEmployee, updateEmployee } from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../service/EmployeeService";

const EmployeeComponent = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  function saveEmployee() {
    const employee = {
      firstName,
      lastName,
      email,
    };

    if (id) {
      updateEmployee(Number(id), employee)
        .then((response) => {
          console.log(response.data);

          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createEmployee(employee)
        .then((response) => {
          console.log(response.data);

          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (id) {
      getEmployee(Number(id))
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
          <h2 className="text-center mt-3">Add Employee</h2>

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>

                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>

                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-success"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>

            {/* Temporary Testing */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
