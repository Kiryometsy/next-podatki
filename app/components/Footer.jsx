// app/components/Footer.jsx
export default function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-6 mt-10">
			<div className="max-w-7xl mx-auto text-center">
				<p className="text-sm">
					© {new Date().getFullYear()} Next-Podatki. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
