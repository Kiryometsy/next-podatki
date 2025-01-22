"use client";
import { useState } from "react";
import { useSalary } from "../SalaryContext";

const EmployeeSalaryInput = () => {
	const [employees, setEmployees] = useState([
		{ salary: "", isStudent: false, dropdownValue: 1 },
	]);
	const { addSalary, removeSalary } = useSalary();

	const handleSalaryChange = (index, value) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index].salary = value;
		setEmployees(updatedEmployees);
	};

	const handleStudentToggle = (index) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index].isStudent = !updatedEmployees[index].isStudent;
		setEmployees(updatedEmployees);
	};

	const handleDropdownChange = (index, value) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index].dropdownValue = value;
		setEmployees(updatedEmployees);
	};

	const addEmployee = () => {
		setEmployees([
			...employees,
			{ salary: "", isStudent: false, dropdownValue: 1 },
		]);
	};

	const removeEmployee = (index) => {
		const updatedEmployees = employees.filter((_, i) => i !== index);
		setEmployees(updatedEmployees);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		removeSalary();
		for (const employee of employees) {
			try {
				await addSalary({
					salary: parseFloat(employee.salary),
					isStudent: employee.isStudent,
					dropdownValue: employee.dropdownValue,
				});
			} catch (error) {
				console.error("Failed to add salary:", error);
				alert("An error occurred while adding salaries. Please try again.");
				return;
			}
		}
		setEmployees([{ salary: "", isStudent: false, dropdownValue: 1 }]); // Reset to one empty employee
	};

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
			<h1 className="text-xl font-semibold text-gray-800">Employee Salaries</h1>
			<form onSubmit={handleSubmit} className="mt-6">
				{employees.map((employee, index) => (
					<div key={index} className="mb-4">
						<label
							htmlFor={`salary-${index}`}
							className="block mb-1 text-sm font-medium text-gray-600"
						>
							Employee {index + 1} Salary
						</label>
						<div className="flex items-center space-x-4">
							<input
								type="number"
								id={`salary-${index}`}
								required
								min={3490}
								value={employee.salary}
								onChange={(e) => handleSalaryChange(index, e.target.value)}
								className="px-4 py-2 border border-gray-300 rounded-md w-48 focus:ring-2 focus:ring-blue-500"
								placeholder="Enter salary"
							/>
							<label className="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={employee.isStudent}
									onChange={() => handleStudentToggle(index)}
									className="form-checkbox"
								/>
								<span className="text-sm text-gray-600">Is Student</span>
							</label>
							<select
								value={employee.dropdownValue}
								onChange={(e) =>
									handleDropdownChange(index, Number(e.target.value))
								}
								className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value={0}>nie odliczaj</option>
								<option value={1}>standardowe(250)</option>
								<option value={2}>podwyższone(300)</option>
							</select>
							{employees.length > 1 && (
								<button
									type="button"
									onClick={() => removeEmployee(index)}
									className="text-red-500 hover:text-red-700 text-sm"
								>
									Remove
								</button>
							)}
						</div>
					</div>
				))}
				<div className="mt-6 flex space-x-4">
					<button
						type="button"
						onClick={addEmployee}
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						+ Add Employee
					</button>
					<button
						type="submit"
						className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EmployeeSalaryInput;
