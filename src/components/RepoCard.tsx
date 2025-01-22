import { Repo } from "../App";
import ArrowDiagonal from "../assets/icons/ArrowDiagonal";
import Eye from "../assets/icons/Eye";
import Fork from "../assets/icons/Fork";
import Star from "../assets/icons/Star";

const Card = ({ repo }: { repo: Repo }) => {
	return (
		<a
			href={repo.html_url}
			target="_blank"
			rel="noopener noreferrer"
			className="group text-lg font-semibold truncate w-full"
		>
			<div className="bg-gray-50 dark:bg-gray-900 transition-all duration-200 ease-in-out p-4 rounded-md flex flex-col gap-2 min-h-[100px] overflow-hidden hover:bg-gray-200/50 dark:hover:bg-gray-900/70 cursor-pointer">
				<div className="flex flex-row justify-between items-center">
					<div className="flex-grow truncate">
						{repo.name}
					</div>
					<ArrowDiagonal className="transition-transform transform group-hover:scale-125 group-hover:rotate-45" />
				</div>

				<div className="flex flex-row gap-2 items-center">
					<img
						src={repo.owner.avatar_url}
						alt={repo.owner.login}
						className="w-5 h-5 rounded-full"
					/>
					<div className="text-xs font-light text-gray-700 dark:text-gray-400 truncate">
						{repo.owner.login}
					</div>
				</div>

				<p className="text-sm font-normal text-gray-700 dark:text-gray-300 truncate">
					{repo.description
						? repo.description
						: "No description available"}
				</p>

				<div className="flex flex-row justify-between items-center gap-4 mt-2">
					<div className="text-xs text-center min-w-[30px] text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 py-1 px-2 rounded-md w-fit">
						{repo.language ? repo.language : "-"}
					</div>
					<div className="flex flex-row gap-2">
						<div className="flex flex-row gap-1 items-center">
							<Eye />
							<div className="text-xs font-light text-gray-700 dark:text-gray-400">
								{repo.watchers_count > 0
									? repo.watchers_count
									: "0"}
							</div>
						</div>
						<div className="flex flex-row gap-1 items-center">
							<Fork />
							<div className="text-xs font-light text-gray-700 dark:text-gray-400">
								{repo.forks_count > 0 ? repo.forks_count : "0"}
							</div>
						</div>
						<div className="flex flex-row gap-1 items-center">
							<Star />
							<div className="text-xs font-light text-gray-700 dark:text-gray-400">
								{repo.stargazers_count > 0
									? repo.stargazers_count
									: "0"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Card;
