export const fetchRepositories = async (query: string, page: number = 1, perPage: number) => {
	try {
		const response = await fetch(
			`https://api.github.com/search/repositories?q=${query}&per_page=${perPage}&page=${page}`
		);

		if (!response.ok) {
			if (response.status === 403) throw new Error("Rate limit exceeded. Try again later.");
			throw new Error("Failed to fetch repositories.");
		}

		return await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
};
