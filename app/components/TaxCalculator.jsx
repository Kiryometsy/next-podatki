"use client";

import { useSalary } from "../SalaryContext";

const EmployeeDetail = ({
	index,
	grossSalary,
	afterTax,
	ZUS,
	koszty,
	zaliczkaPit,
	isStudent,
	totalCost,
	secZUS,
	Fp,
	FGSP,
}) => (
	<li>
		Employee {index + 1}:
		<span className="ml-2">Salary: {grossSalary.toFixed(2)} zł</span>,
		<span className="ml-2">After Tax: {afterTax.toFixed(2)} zł</span>,
		<span className="ml-2">{isStudent ? "Student" : "Non-Student"}</span>,
		<span className="ml-2">ZUS: {ZUS.toFixed(2)} zł</span>,
		<span className="ml-2">Koszty: {koszty.toFixed(2)} zł</span>,
		<span className="ml-2">Zaliczka Pit: {zaliczkaPit.toFixed(2)} zł</span>,
		<span className="ml-2">Koszty całkowite: {totalCost.toFixed(2)} zł</span>,
		<span className="ml-2">ZUS: {secZUS.toFixed(2)} zł</span>,
		<span className="ml-2">FP: {Fp.toFixed(2)} zł</span>,
		<span className="ml-2">FGŚP: {FGSP.toFixed(2)} zł</span>,
	</li>
);

const TaxCalculator = () => {
	const { salaries, calculatedSalaries, calculateTotalTax } = useSalary();

	return (
		<div className="p-4 mt-8">
			<h1 className="text-xl font-semibold">Tax Calculator</h1>
			<div className="mt-4">
				<h2 className="text-lg font-semibold">Employee Tax Details:</h2>
				<ul className="list-disc ml-6">
					{console.log(calculatedSalaries, "w taxcalculator")}
					{salaries.length > 0 ? (
						calculatedSalaries.map(
							([afterTax, taxDetails, taxDetailEmployeer], index) => (
								<EmployeeDetail
									key={index}
									index={index}
									grossSalary={salaries[index].salary}
									afterTax={afterTax}
									ZUS={taxDetails.ZUS}
									koszty={taxDetails.koszty}
									zaliczkaPit={taxDetails.zaliczka_Pit}
									isStudent={salaries[index].isStudent}
									totalCost={taxDetailEmployeer.Calkowite}
									secZUS={taxDetailEmployeer.ZUS}
									Fp={taxDetailEmployeer.FP}
									FGSP={taxDetailEmployeer.FGSP}
								/>
							)
						)
					) : (
						<li>No employees added yet.</li>
					)}
				</ul>
			</div>
			<div className="mt-4">
				<h3 className="text-lg font-semibold">
					Total Tax: {calculateTotalTax().toFixed(2)} zł
				</h3>
			</div>
		</div>
	);
};

export default TaxCalculator;
