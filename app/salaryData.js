// // salaryData.js
// let salaries = [];

// export const addSalary = (salary) => {
//   salaries.push(salary);
// };

// export const removeSalary = (index) => {
//   salaries = salaries.filter((_, i) => i !== index);
// };

// export const getSalaries = () => {
//   return salaries;
// };

// export const calculateTax = (salary) => {
//   if (salary <= 10000) {
//     return salary * 0.1;
//   } else if (salary <= 50000) {
//     return salary * 0.2;
//   } else {
//     return salary * 0.3;
//   }
// };

// export const calculateTotalTax = () => {
//   return salaries.reduce((total, salary) => total + calculateTax(salary), 0);
// };
