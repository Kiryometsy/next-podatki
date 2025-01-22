// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
	title: "Next-Podatki",
	description: "Tax calculation made easy.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-sans">
				<Navbar />
				<main className="flex-grow mt-16 px-6 py-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
