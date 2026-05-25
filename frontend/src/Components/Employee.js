import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";

function Employee() {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");

    const [emp, setEmp] = useState({
        name: "",
        department: "",
        salary: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAll()
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const save = (e) => {
        e.preventDefault();

        if (editId) {
            EmployeeService.update(editId, emp)
                .then(() => {
                    loadEmployees();
                    reset();
                });
        } else {
            EmployeeService.create(emp)
                .then(() => {
                    loadEmployees();
                    reset();
                });
        }
    };

    const edit = (e) => {
        setEmp(e);
        setEditId(e.id);
    };

    const remove = (id) => {
        EmployeeService.delete(id)
            .then(() => loadEmployees());
    };

    const reset = () => {
        setEmp({
            name: "",
            department: "",
            salary: ""
        });

        setEditId(null);
    };

    const filteredEmployees = employees.filter(e =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.department.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="container">

            <div className="row g-4">

                {/* FORM SECTION */}

                <div className="col-lg-4">

                    <div className="card shadow p-4">

                        <h3 className="text-center mb-4">
                            Employee Form
                        </h3>

                        <form onSubmit={save}>

                            <input
                                type="text"
                                className="form-control mb-3"
                                name="name"
                                placeholder="Enter Name"
                                value={emp.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                name="department"
                                placeholder="Enter Department"
                                value={emp.department}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                className="form-control mb-3"
                                name="salary"
                                placeholder="Enter Salary"
                                value={emp.salary}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-100 mb-2"
                            >
                                {editId ? "Update Employee" : "Add Employee"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary w-100"
                                onClick={reset}
                            >
                                Clear
                            </button>

                        </form>

                    </div>

                </div>

                {/* TABLE SECTION */}

                <div className="col-lg-8">

                    <div className="card shadow p-4">

                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">

                            <h3 className="mb-2">
                                Employee List
                            </h3>

                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control search-box"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Salary</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        filteredEmployees.map(e => (

                                            <tr key={e.id}>

                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.department}</td>
                                                <td>{e.salary}</td>

                                                <td>

                                                    <div className="action-buttons">

                                                        <button
                                                            className="btn btn-warning btn-sm"
                                                            onClick={() => edit(e)}
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => remove(e.id)}
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Employee;