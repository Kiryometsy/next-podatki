import Image from "next/image";
import EmployeeSalaryInput from "./components/EmployeeSalaryInput";
import TaxCalculator from './components/TaxCalculator';
import { SalaryProvider } from './SalaryContext';

export default function Home() {
  return (
    <SalaryProvider>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <EmployeeSalaryInput />
        <TaxCalculator />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>footer</div>
      </footer>
    </div>
    </SalaryProvider>
  );
}
