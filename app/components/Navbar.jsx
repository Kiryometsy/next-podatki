// app/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-blue-600 fixed top-0 left-0 w-full z-50 py-4 px-8 shadow-md">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				{/* Branding */}
				<Link
					href="/"
					className="text-2xl font-bold text-white hover:text-gray-200"
				>
					Next-Podatki
				</Link>

				{/* Navigation Links */}
				<div className="hidden md:flex space-x-8 text-sm">
					<Link href="/" className="text-white hover:text-gray-200">
						Home
					</Link>
					<Link href="/calc" className="text-white hover:text-gray-200">
						Calculator
					</Link>
				</div>
			</div>
		</nav>
	);
}
