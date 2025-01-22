import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import useRepositories from "./hooks/useRepositories";
import DarkModeToggle from "./components/DarkModeToggle";
import RepoGrid from "./components/RepoGrid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Repo {
	id: number;
	name: string;
	description: string;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	language: string | null;
	html_url: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

function App() {
	const [query, setQuery] = useState("");
	const [perPage, setPerPage] = useState(12);
	const {
		data,
		loading,
		currentPage,
		totalPages,
		totalResults,
		setCurrentPage,
	} = useRepositories(query, perPage);

	return (
		<div className="font-sans text-base flex flex-col min-h-screen gap-4 p-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
			<ToastContainer />
			<div className="flex flex-row items-center">
				<div className="flex-grow flex gap-8">
					<h1 className="text-3xl font-black">GitSeek.</h1>
					<Search
						query={query}
						setQuery={setQuery}
						loading={loading}
					/>
				</div>
				<DarkModeToggle />
			</div>

			{query && totalResults > 0 && (
				<p className="text-right text-xs text-gray-600 mb-4">
					Displaying{" "}
					<span>
						<select
							value={perPage}
							className="text-sm bg-transparent"
							onChange={(e) =>
								setPerPage(Number(e.target.value))
							}
						>
							<option value={12}>12</option>
							<option value={24}>24</option>
							<option value={36}>36</option>
						</select>
					</span>{" "}
					of <strong>{Math.min(totalResults, 1000)}</strong> results
				</p>
			)}
			<div className="flex-grow flex flex-col">
				<RepoGrid repos={data} loading={loading} />
			</div>

			{/* Pagination Controls */}
			{totalPages > 1 && (
				<div className="sticky bottom-0">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
						loading={loading}
					/>
				</div>
			)}
		</div>
	);
}

export default App;
