import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center my-8">
      {currentPage > 1 && totalPages !== 0 && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mr-1 rounded-full w-10 h-10 bg-gray-200 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
        </button>
      )}
      <div className="grid grid-flow-col auto-cols-max gap-1">
        {pageNumbers.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 rounded-full w-10 h-10 ${
              currentPage === page
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            } focus:outline-none`}
          >
            {page}
          </button>
        ))}
      </div>
      {currentPage < totalPages && totalPages !== 0 && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 ml-1 rounded-full w-10 h-10 bg-gray-200 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
