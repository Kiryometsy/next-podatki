// "use client";

// import React, { createContext, useContext, useState } from "react";
// const SalaryContext = createContext();

// export const useSalary = () => useContext(SalaryContext);

// export const SalaryProvider = ({ children }) => {
// 	const [salaries, setSalaries] = useState([]);
// 	const addSalary = ({ salary, isStudent, dropdownValue }) => {
// 		setSalaries((prevSalaries) => [
// 			...prevSalaries,
// 			{ salary, isStudent, dropdownValue },
// 		]);
// 	};

// 	const removeSalary = (index) => {
// 		setSalaries((prevSalaries) => prevSalaries.filter((_, i) => i !== index));
// 	};

// 	const taxTab = [0.0976, 0.015, 0.0245];

// 	let CalculatedTab = {
// 		ZUS: 0,
// 		koszty: 0,
// 		zaliczka_Pit: 0,
// 	};
// 	const incomeCost = [0, 250, 300];

// 	const calculateTax = ({ salary, isStudent, dropdownValue }) => {
// 		//console.log(dropdownValue);
// 		CalculatedTab.zaliczka_Pit = 0;
// 		let taxSum = 0;
// 		taxTab.forEach((taxRate, index) => {
// 			//Skladki społeczne
// 			taxSum += salary * taxRate;
// 			//console.log(`Tax ${index + 1}: ${taxSum.toFixed(2)}`);
// 		});
// 		salary -= taxSum;
// 		CalculatedTab.ZUS = taxSum; //przypisanie kwoty zus
// 		taxSum = 0;

// 		let skladkaZdrowo = salary * 0.09; // składka zrowotna
// 		skladkaZdrowo = Number(skladkaZdrowo.toFixed(2));
// 		CalculatedTab.ZUS += skladkaZdrowo;

// 		let salaryLowered = salary - incomeCost[dropdownValue]; // PODSTAWA SKLADKI POMNIEJSZONA O KOSZTY PRZYCHODU
// 		CalculatedTab.koszty = incomeCost[dropdownValue];

// 		if (!isStudent) {
// 			let advanceForIncomeTax = salaryLowered * 0.12; //zaliczka na podatek dochodowy
// 			advanceForIncomeTax -= 300;
// 			advanceForIncomeTax = Math.round(advanceForIncomeTax); //zaokrąglenie
// 			CalculatedTab.zaliczka_Pit = advanceForIncomeTax;

// 			salary = salary - skladkaZdrowo - advanceForIncomeTax; //kwota netto
// 		} else {
// 			salary = salary - skladkaZdrowo; //kwota netto dla studenta
// 		}

// 		// KOSZTY UZYSKANIA PRZYCHODU zaokrąglone do pełnej cyfry
// 		//console.log(CalculatedTab);
// 		const arr = [salary, CalculatedTab];
// 		//return salary;
// 		console.log(arr);
// 		return arr;
// 		// if (salary <= 10000) return salary * taxRate;
// 		// else if (salary <= 50000) return salary * (isStudent ? 0.1 : 0.2);
// 		// else return salary * (isStudent ? 0.2 : 0.3);
// 	};

// 	const calculateTotalTax = () => {
// 		return salaries.reduce(
// 			(total, { salary, isStudent, dropdownValue }) =>
// 				total + calculateTax({ salary, isStudent, dropdownValue })[0],
// 			0
// 		);
// 	};

// 	return (
// 		<SalaryContext.Provider
// 			value={{
// 				salaries,
// 				addSalary,
// 				removeSalary,
// 				calculateTax,
// 				calculateTotalTax,
// 			}}
// 		>
// 			{children}
// 		</SalaryContext.Provider>
// 	);
// };
