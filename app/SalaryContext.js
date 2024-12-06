// salaryContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const SalaryContext = createContext();

export const useSalary = () => useContext(SalaryContext);

export const SalaryProvider = ({ children }) => {
  const [salaries, setSalaries] = useState([]);

  const addSalary = (salary) => {
    setSalaries((prevSalaries) => [...prevSalaries, salary]);
  };

  const removeSalary = (index) => {
    setSalaries((prevSalaries) => prevSalaries.filter((_, i) => i !== index));
  };

  const calculateTax = (salary) => {
    if (salary <= 10000) return salary * 0.1;
    else if (salary <= 50000) return salary * 0.2;
    else return salary * 0.3;
  };

  const calculateTotalTax = () => {
    return salaries.reduce((total, salary) => total + calculateTax(salary), 0);
  };

  return (
    <SalaryContext.Provider value={{ salaries, addSalary, removeSalary, calculateTax, calculateTotalTax }}>
      {children}
    </SalaryContext.Provider>
  );
};
