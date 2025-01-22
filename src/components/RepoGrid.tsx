import { Repo } from "../App";
import RepoCard from "./RepoCard";

const RepoGrid = ({ repos, loading }: { repos: Repo[]; loading: boolean }) => {
	if (loading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{Array.from({ length: 8 }).map((_, index) => (
					<div
						key={index}
						className="animate-pulse bg-gray-100 dark:bg-gray-900/50 h-24 w-full rounded-md"
					></div>
				))}
			</div>
		);
	}

	if (repos.length === 0) {
		return (
			/** ✅ This makes sure the empty state is **vertically and horizontally centered** */
			<div className="flex flex-grow justify-center items-center h-full">
				<div className="flex flex-col items-center gap-4">
					<img src="/empty.png" className="w-1/5" alt="No Results" />
					<div className="text-center">
						<p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
							No Results
						</p>
						<p className="text-md font-light text-gray-600 dark:text-gray-400">
							Try searching for something.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{repos.map((repo) => (
				<RepoCard key={repo.id} repo={repo} />
			))}
		</div>
	);
};

export default RepoGrid;
