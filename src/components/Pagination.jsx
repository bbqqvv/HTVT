import React from 'react';
import classNames from 'classnames';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    // Helper function to generate page numbers with ellipses
    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage < 5) {
                for (let i = 1; i <= 5; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage > totalPages - 4) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    };

    return (
        <nav className="mt-6" aria-label="Page navigation">
            <ul className="flex justify-center space-x-2">
                <li>
                    <button
                        className={classNames("px-4 py-2 rounded-md border text-gray-700", {
                            'bg-gray-200 cursor-not-allowed': currentPage === 1,
                            'bg-blue-500 text-white hover:bg-blue-600': currentPage !== 1,
                        })}
                        onClick={handlePreviousClick}
                        disabled={currentPage === 1}
                        aria-label="Previous"
                    >
                        «
                    </button>
                </li>
                {getPageNumbers().map((page, index) => (
                    <li key={index}>
                        {page === '...' ? (
                            <span className="px-4 py-2 text-gray-500">...</span>
                        ) : (
                            <button
                                className={classNames("px-4 py-2 rounded-md border text-gray-700", {
                                    'bg-blue-500 text-white': currentPage === page,
                                    'hover:bg-gray-200': currentPage !== page,
                                })}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}
                <li>
                    <button
                        className={classNames("px-4 py-2 rounded-md border text-gray-700", {
                            'bg-gray-200 cursor-not-allowed': currentPage === totalPages,
                            'bg-blue-500 text-white hover:bg-blue-600': currentPage !== totalPages,
                        })}
                        onClick={handleNextClick}
                        disabled={currentPage === totalPages}
                        aria-label="Next"
                    >
                        »
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
