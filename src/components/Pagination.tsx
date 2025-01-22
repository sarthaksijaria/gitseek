import { usePagination } from "../hooks/usePagination";
import ArrowRight from "../assets/icons/ArrowRight";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	loading: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	loading,
}) => {
	const pages = usePagination(totalPages, currentPage);

	return (
		<div className="flex justify-center items-center gap-28 py-3 bg-white dark:bg-gray-950">
			<div className="flex items-center gap-2">
				<button
					onClick={() => onPageChange(currentPage - 1)}
					className={`p-2 ${
						(currentPage === 1 || loading) && "opacity-20 cursor-not-allowed"
					}`}
				>
					<ArrowRight className="rotate-180" />
				</button>

				<div className="flex gap-4">
					{pages.map((page, index) =>
						typeof page === "number" ? (
							<button
								key={index}
								onClick={() => onPageChange(page)}
								className={
									page === currentPage
										? "text-gray-900 dark:text-gray-100"
										: "text-gray-500 dark:text-gray-500"
								}
								disabled={page === currentPage || loading}
							>
								{page}
							</button>
						) : (
							<span key={index}>...</span>
						)
					)}
				</div>

				<button
					onClick={() => onPageChange(currentPage + 1)}
					className={`p-2 ${currentPage >= totalPages && "opacity-20 cursor-not-allowed"}`}
					disabled={currentPage >= totalPages}
				>
					<ArrowRight />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
