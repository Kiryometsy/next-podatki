import Image from "next/image";
import EmployeeSalaryInput from "./components/EmployeeSalaryInput";
import TaxCalculator from "./components/TaxCalculator";

import { SalaryProvider } from "./SalaryContext";

export default function Home() {
	return (
		<SalaryProvider>
			<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
				<header className="text-center mb-12">
					<h1 className="text-3xl font-bold text-center sm:text-left">
						Welcome to the Tax Calculator
					</h1>
					<p className="text-lg text-center sm:text-left">
						This project is a simple tool to help you calculate tax of your
						employees based on theirs salary. Enter salary, and the system will
						calculate tax, providing an easy-to-understand breakdown of the
						amount you need to pay.
					</p>
				</header>

				<main className="w-full max-w-4xl px-4 sm:px-6 md:px-8">
					<EmployeeSalaryInput />
					<div className="my-12">
						<TaxCalculator />
					</div>
				</main>
			</div>
		</SalaryProvider>
	);
}
