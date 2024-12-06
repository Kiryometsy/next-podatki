// EmployeeSalaryInput.js
'use client';
import { useState } from 'react';
import { useSalary } from '../SalaryContext'; // Import the context

const EmployeeSalaryInput = () => {
  const [employees, setEmployees] = useState([{ salary: '' }]);
  const { addSalary } = useSalary(); // Access the addSalary function from context
  
  const handleSalaryChange = (index, value) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].salary = value;
    setEmployees(updatedEmployees);
  };

  const addEmployee = () => {
    setEmployees([...employees, { salary: '' }]);
  };

  const removeEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleSubmit = () => {
    employees.forEach(employee => {
      if (employee.salary && !isNaN(employee.salary)) {
        addSalary(parseFloat(employee.salary)); // Add salary to context
      }
    });
    setEmployees([{ salary: '' }]); // Reset to one empty employee
  };
  

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Employee Salaries</h1>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4">
        {employees.map((employee, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`salary-${index}`} className="block mb-1 text-sm text-gray-600">
              Employee {index + 1} Salary
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                id={`salary-${index}`}
                value={employee.salary}
                onChange={(e) => handleSalaryChange(index, e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-48"
                placeholder="Enter salary"
              />
              {employees.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEmployee(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="mt-4 flex space-x-4">
          <button
            type="button"
            onClick={addEmployee}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            + Add Employee
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Employee Salaries:</h2>
        <ul className="list-disc ml-6">
          {employees.map((employee, index) => (
            <li key={index}>Employee {index + 1}: ${employee.salary}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeSalaryInput;
