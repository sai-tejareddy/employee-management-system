import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    doj: "",
    dept: {
      deptName: "",
      designation: ""
    }
  });

  const [errors, setErrors] = useState({
    name: "",
    doj: "",
    deptName: "",
    designation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'doj') {
      setEmployee({ ...employee, [name]: value });
    } else {
      setEmployee({ ...employee, dept: { ...employee.dept, [name]: value } });
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!employee.name) {
      tempErrors.name = "Name is mandatory";
      isValid = false;
    }

    if (!employee.doj) {
      tempErrors.doj = "Date is mandatory";
      isValid = false;
    }

    if (!employee.dept.deptName) {
      tempErrors.deptName = "Department Name is mandatory";
      isValid = false;
    }

    if (!employee.dept.designation) {
      tempErrors.designation = "Designation is mandatory";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formattedDate = formatDate(employee.doj);

      const employeeData = {
        ...employee,
        doj: formattedDate
      };

      EmployeeService.addEmployee(employeeData).then(() => {
        navigate("/employees");
      });
    }
  };

  const cancelHandle = (e) => {
    e.preventDefault();
    navigate("/employees");
  };

  return (
    <div className='card col-md-6 offset-3'>
      <h4 className='text-center'> Add Employee </h4>
      <div className='card-body'>
        <form>
          <label className='my-2'>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className='form-control'
            value={employee.name}
            onChange={handleChange}
          />
          {errors.name && <div className='text-danger'>{errors.name}</div>}

          <label className='my-2'>DOJ:</label>
          <input
            type="date"
            name="doj"
            id="doj"
            className='form-control'
            value={employee.doj}
            onChange={handleChange}
          />
          {errors.doj && <div className='text-danger'>{errors.doj}</div>}

          <label className='my-2'>Department:</label>
          <input
            type="text"
            name="deptName"
            id="deptName"
            className='form-control'
            value={employee.dept.deptName}
            onChange={handleChange}
          />
          {errors.deptName && <div className='text-danger'>{errors.deptName}</div>}

          <label className='my-2'>Designation:</label>
          <input
            type="text"
            name="designation"
            id="designation"
            className='form-control'
            value={employee.dept.designation}
            onChange={handleChange}
          />
          {errors.designation && <div className='text-danger'>{errors.designation}</div>}

          <button className='btn btn-danger mt-3' onClick={cancelHandle}>Cancel</button>
          <button className='btn btn-success mt-3 ms-3' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;

