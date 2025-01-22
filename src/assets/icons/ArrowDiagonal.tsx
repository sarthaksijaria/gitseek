const ArrowDiagonal = ({ className }: { className?: string}) => {
	return (
		<svg
			viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			className={`w-4 h-4 text-gray-900 dark:text-gray-100 ${className}`}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M7 17L17 7M17 7H8M17 7V16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	);
};

export default ArrowDiagonal;
