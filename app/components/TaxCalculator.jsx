// TaxCalculator.js
'use client';
import { useSalary } from '../SalaryContext'; // Import the context

const TaxCalculator = () => {
  const { salaries, calculateTax, calculateTotalTax } = useSalary(); // Access salaries and tax functions from context

  return (
    <div className="p-4 mt-8">
      <h1 className="text-xl font-semibold">Tax Calculator</h1>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Employee Tax Details:</h2>
        <ul className="list-disc ml-6">
          {salaries.length > 0 ? (
            salaries.map((salary, index) => (
              <li key={index}>
                Employee {index + 1}:
                <span className="ml-2">Salary: ${salary.toFixed(2)}</span>,
                <span className="ml-2">Tax: ${calculateTax(salary).toFixed(2)}</span>
              </li>
            ))
          ) : (
            <li>No employees added yet.</li>
          )}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Total Tax: ${calculateTotalTax().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default TaxCalculator;
