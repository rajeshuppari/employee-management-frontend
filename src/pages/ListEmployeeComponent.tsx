import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";
import { deletedEmployee, listEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const navigate = useNavigate();

  function updateEmployee(id: number) {
    navigate(`/edit-employee/${id}`);
  }



  function addNewEmployee() {
    navigate("/add-employee");
  }

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    console.log("useEffect executed");

    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        console.log("Response received");

        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function deletefun(id: number) {

    deletedEmployee(id)
        .then((response) => {

            console.log(response.data);
                getAllEmployees();


        })
        .catch((error) => {

            console.error(error);

        });

}

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Employees</h2>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={addNewEmployee}>
          Add Employee
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>employee Id</th>
            <th>employee Id</th>
            <th>last name</th>
            <th>email</th>
            <th>Actions</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(emp.id!)}
                >
                  Update
                </button>
              </td>

               <td>
                <button
                  className="btn btn-info"
                  onClick={() => deletefun(emp.id!)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
