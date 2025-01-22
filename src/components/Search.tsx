import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Cross from "../assets/icons/Cross";
import Loading from "../assets/icons/Loading";

const Search = ({
	query,
	setQuery,
	loading,
}: {
	query: string;
	setQuery: (query: string) => void;
	loading: boolean;
}) => {
	const [localQuery, setLocalQuery] = useState(query);

	// Debounced search handler
	const debouncedSearch = debounce((searchTerm) => {
		setQuery(searchTerm);
	}, 500);

	useEffect(() => {
		debouncedSearch(localQuery);
		return () => debouncedSearch.cancel();
	}, [localQuery]);

	const clearSearch = () => {
		setQuery("");
		setLocalQuery("");
	};

	return (
		<div className="relative w-1/2">
			<input
				type="text"
				value={localQuery}
				placeholder="Search repositories ..."
				className="py-2 px-4 w-full shadow-sm rounded-md bg-gray-100 text-gray-900 focus:outline-none dark:bg-gray-900 dark:text-white"
				onChange={(e) => setLocalQuery(e.target.value)}
				aria-label="Search repositories"
			/>
			{loading && (
				<div className="absolute right-2 top-1/2 transform -translate-y-1/2">
					<Loading />
				</div>
			)}
			{query && !loading && (
				<div onClick={clearSearch} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
					<Cross />
				</div>
			)}
		</div>
	);
};

export default Search;
