'use client';

import React, { createContext, useContext, useState } from 'react';
const SalaryContext = createContext();

export const useSalary = () => useContext(SalaryContext);

export const SalaryProvider = ({ children }) => {
  const [salaries, setSalaries] = useState([]);
  const taxTab=[0.0976,0.015,0.0245]

  const addSalary = ({ salary, isStudent }) => {
    setSalaries((prevSalaries) => [...prevSalaries, { salary, isStudent }]);
  };

  const removeSalary = (index) => {
    setSalaries((prevSalaries) => prevSalaries.filter((_, i) => i !== index));
  };

  const calculateTax = ({ salary, isStudent }) => {
    let taxSum=0;
    taxTab.forEach((taxRate, index) => {//Skladki społeczne
      taxSum += salary * taxRate;
      //console.log(`Tax ${index + 1}: ${taxSum.toFixed(2)}`);
    });
    
    salary -=taxSum;

    taxSum =0

    taxSum +=salary*0.09 // składka zrowotna
    // KOSZTY UZYSKANIA PRZYCHODU zaokrąglone do pełnej cyfry 

    const taxRate = isStudent ? 0.05 : 0.1; // Students get a tax discount
    if (salary <= 10000) return salary * taxRate;
    else if (salary <= 50000) return salary * (isStudent ? 0.1 : 0.2);
    else return salary * (isStudent ? 0.2 : 0.3);
  };

  const calculateTotalTax = () => {
    return salaries.reduce((total, { salary, isStudent }) => total + calculateTax({ salary, isStudent }), 0);
  };

  return (
    <SalaryContext.Provider value={{ salaries, addSalary, removeSalary, calculateTax, calculateTotalTax }}>
      {children}
    </SalaryContext.Provider>
  );
};
