import { useEffect, useState } from "react";
import Sun from "../assets/icons/Sun";
import Moon from "../assets/icons/Moon";

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("theme") === "dark"
	);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<button
			className="p-2 w-fit rounded"
			onClick={() => setDarkMode(!darkMode)}
		>
			{darkMode ? <Sun /> : <Moon />}
		</button>
	);
};

export default DarkModeToggle;
