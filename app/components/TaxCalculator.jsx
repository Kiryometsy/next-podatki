"use client";

import { useState } from "react";
import { useSalary } from "../SalaryContext";

const TaxCalculator = () => {
	const {
		salaries,
		calculatedSalaries,
		calculateTotalTax,
		calculateTotalEmployeerExpense,
	} = useSalary();
	const [showEmployeeDetails, setShowEmployeeDetails] = useState(true);

	const toggleView = () => setShowEmployeeDetails((prev) => !prev);

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
			<h1 className="text-xl font-semibold text-gray-800">Tax Calculator</h1>
			<div className="mt-6 flex justify-between items-center">
				<h2 className="text-lg font-semibold text-gray-700">
					{showEmployeeDetails ? "Employee Tax Details" : "Employer's Expense"}
				</h2>
				<button
					onClick={toggleView}
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				>
					{showEmployeeDetails
						? "Show Employer's Expense"
						: "Show Employee Tax Details"}
				</button>
			</div>
			<div className="mt-4 overflow-x-auto">
				{calculatedSalaries.length > 0 ? (
					<table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
						<thead>
							<tr className="bg-gray-100 text-gray-600">
								<th className="border border-gray-300 px-4 py-2">Employee</th>
								{showEmployeeDetails ? (
									<>
										<th className="border border-gray-300 px-4 py-2">
											Salary (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											After Tax (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											ZUS (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											Koszty (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											Zaliczka PIT (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											Student Status
										</th>
									</>
								) : (
									<>
										<th className="border border-gray-300 px-4 py-2">
											Employeer Cost (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											Secondary ZUS (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											FP (zł)
										</th>
										<th className="border border-gray-300 px-4 py-2">
											FGŚP (zł)
										</th>
									</>
								)}
							</tr>
						</thead>
						<tbody>
							{calculatedSalaries.map(
								([afterTax, taxDetails, taxDetailEmployeer], index) => (
									<tr
										key={index}
										className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
									>
										<td className="border border-gray-300 px-4 py-2 text-center">
											Employee {index + 1}
										</td>
										{showEmployeeDetails ? (
											<>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetails.wyplata.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{afterTax.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetails.ZUS.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetails.koszty.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetails.zaliczka_Pit.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-center">
													{taxDetails.isStudent ? "Student" : "Non-Student"}
												</td>
											</>
										) : (
											<>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetailEmployeer.Calkowite.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetailEmployeer.ZUS.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetailEmployeer.FP.toFixed(2)}
												</td>
												<td className="border border-gray-300 px-4 py-2 text-right">
													{taxDetailEmployeer.FGSP.toFixed(2)}
												</td>
											</>
										)}
									</tr>
								)
							)}
						</tbody>
					</table>
				) : (
					<p className="mt-2 text-center text-gray-500">
						No employees added yet.
					</p>
				)}
			</div>
			<div className="mt-6 text-center">
				<h3 className="text-lg font-semibold">
					Total Net Amount: {calculateTotalTax().toFixed(2)} zł <br />
					{/* Total Employeer Cost: {calculateTotalEmployeerExpense().toFixed(2)} zł */}
				</h3>
			</div>
		</div>
	);
};

export default TaxCalculator;
