"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const SalaryContext = createContext();

export const useSalary = () => useContext(SalaryContext);

export const SalaryProvider = ({ children }) => {
  const [salaries, setSalaries] = useState([]);
  const [calculatedSalaries, setCalculatedSalaries] = useState([]);

  const addSalary = ({ salary, isStudent, dropdownValue }) => {
    setSalaries((prevSalaries) => {
      const updatedSalaries = [
        ...prevSalaries,
        { salary, isStudent, dropdownValue },
      ];
      //console.log("Updated Salaries:", updatedSalaries); // Tu masz dostęp do zaktualizowanej tablicy
      updateCalculatedSalaries(updatedSalaries); // Możesz od razu przekazać zaktualizowaną tablicę
      return updatedSalaries;
    });
    //console.log(salaries);
  };

  const removeSalary = () => {
    setSalaries([]); //{ salary: 0, isStudent: false, dropdownValue: 1 }
    updateCalculatedSalaries();
  };

  const updateCalculatedSalaries = () => {
    const newSalaries = salaries;
    //console.log(newSalaries, "wywołał aktualizacje");
    const newCalculatedSalaries = newSalaries.map((employee) =>
      calculateTax(employee)
    );
    setCalculatedSalaries(newCalculatedSalaries);
  };

  useEffect(() => {
    //console.log(salaries, "w useeffect");
    updateCalculatedSalaries();
  }, [salaries]);

  const taxTab = [0.0976, 0.015, 0.0245];
  const incomeCost = [0, 250, 300];

  const calculateTax = ({ salary, isStudent, dropdownValue }) => {
    let CalculatedTab = {
      isStudent: isStudent,
      wyplata: salary,
      ZUS: 0,
      koszty: incomeCost[dropdownValue],
      zaliczka_Pit: 0,
    };
    const CalculatedTabEmpl = calculateEmployeerCost(salary);
    let taxSum = 0;
    taxTab.forEach((taxRate, index) => {
      //Skladki społeczne
      taxSum += salary * taxRate;
      //console.log(`Tax ${index + 1}: ${taxSum.toFixed(2)}`);
    });
    salary -= taxSum;
    CalculatedTab.ZUS = taxSum; //przypisanie kwoty zus
    taxSum = 0;

    let skladkaZdrowo = salary * 0.09; // składka zrowotna
    skladkaZdrowo = Number(skladkaZdrowo.toFixed(2));
    CalculatedTab.ZUS += skladkaZdrowo;

    let salaryLowered = salary - incomeCost[dropdownValue]; // PODSTAWA SKLADKI POMNIEJSZONA O KOSZTY PRZYCHODU
    CalculatedTab.koszty = incomeCost[dropdownValue];

    if (!isStudent) {
      let advanceForIncomeTax = salaryLowered * 0.12; //zaliczka na podatek dochodowy
      advanceForIncomeTax -= 300;
      advanceForIncomeTax = Math.round(advanceForIncomeTax); //zaokrąglenie
      CalculatedTab.zaliczka_Pit = advanceForIncomeTax;

      salary = salary - skladkaZdrowo - advanceForIncomeTax; //kwota netto
    } else {
      salary = salary - skladkaZdrowo; //kwota netto dla studenta
    }

    // KOSZTY UZYSKANIA PRZYCHODU zaokrąglone do pełnej cyfry
    //console.log(CalculatedTab);
    // const arr = [salary, CalculatedTab];
    // //return salary;
    // console.log(arr);
    // return arr;
    // if (salary <= 10000) return salary * taxRate;
    // else if (salary <= 50000) return salary * (isStudent ? 0.1 : 0.2);
    // else return salary * (isStudent ? 0.2 : 0.3);
    //console.log(salary);
    return [salary, CalculatedTab, CalculatedTabEmpl];
  };

  const taxTabEmpl = [0.0976, 0.065, 0.0167];

  const calculateEmployeerCost = (salary) => {
    let taxSum = 0;
    taxTabEmpl.forEach((taxRate, index) => {
      //Skladki społeczne
      taxSum += salary * taxRate;
      //console.log(`Tax ${index + 1}: ${taxSum.toFixed(2)}`);
    });

    const Fgsp = salary * 0.001; //Fundusz Gwarantowanych Świadczeń Pracowniczych
    const Fp = salary * 0.0245; //Fundusz pracy

    salary = salary + taxSum + Fgsp + Fp;
    const CalculatedTabEmpl = {
      Calkowite: salary,
      ZUS: taxSum,
      FP: Fp,
      FGSP: Fgsp,
    };
    //console.log(CalculatedTabEmpl);
    return CalculatedTabEmpl;
  };
  const calculateTotalTax = () => {
    return calculatedSalaries.reduce((total, [salary]) => total + salary, 0);
  };
  const calculateTotalEmployeerExpense = () => {
    console.log(
      calculatedSalaries.reduce(
        (total, [{ Calkowite }]) => total + Calkowite,
        0
      )
    );
    return calculatedSalaries.reduce(
      (total, [, { Calkowite }]) => total + Calkowite,
      0
    );
  };

  return (
    <SalaryContext.Provider
      value={{
        salaries,
        calculatedSalaries,
        addSalary,
        removeSalary,
        calculateTotalTax,
        calculateTotalEmployeerExpense,
      }}
    >
      {children}
    </SalaryContext.Provider>
  );
};
