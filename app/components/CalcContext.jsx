import { useState } from "react";

const useEmployees = () => {
  // Stan przechowujący tablicę pracowników
  const [employeesCalc, setEmployees] = useState([]);


  const getEmployee=()=>{
    return employeesCalc;
  }
  // Funkcja do dodawania pracownika
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  // Funkcja do usuwania pracownika według ID
  const removeEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  // Funkcja do aktualizowania danych pracownika
  const updateEmployee = (id, updatedData) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, ...updatedData } : employee
      )
    );
  };

  // Funkcja do przypisania całej tablicy pracowników
  function setAllEmployees(newEmployees) {
    setEmployees(newEmployees);
  };

  return { getEmployee, addEmployee, removeEmployee, updateEmployee, setAllEmployees };
};

export default useEmployees;