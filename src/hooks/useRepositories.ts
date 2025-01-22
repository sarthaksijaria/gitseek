import { useState, useEffect } from "react";
import { fetchRepositories } from "../services/api";
import { Repo } from "../App";
import { toast } from "react-toastify";

const MAX_SEARCH_RESULTS = 1000;

const useRepositories = (query: string, perPage: number) => {
	const [data, setData] = useState<Repo[]>([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	useEffect(() => {
		if (!query.trim()) {
			setData([]);
			setTotalResults(0);
			setTotalPages(1);
			return
		}

		const fetchRepos = async () => {
			setLoading(true);
			try {
				const data = await fetchRepositories(query, currentPage, perPage);
				setData(data.items || []);
				setTotalResults(data.total_count);

				// Limit total results to 1000 (GitHub API constraint)
				const maxPossiblePages = Math.ceil(data.total_count / perPage);
				setTotalPages(Math.ceil(Math.min(maxPossiblePages, MAX_SEARCH_RESULTS / perPage)));
			} catch (err: any) {
				toast.error(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchRepos();
	}, [query, currentPage, perPage]);

	return { data, loading, currentPage, totalPages, totalResults, setCurrentPage };
};

export default useRepositories;
