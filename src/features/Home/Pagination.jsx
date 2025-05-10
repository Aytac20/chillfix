import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const maxVisible = 4;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="mb-3 flex items-center justify-center text-xl text-[#a4abb8]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="!rounded-2xl border !border-[#60646b] px-[1.3rem] py-[0.7rem] !text-2xl !font-bold !shadow-2xl hover:bg-[#41444d]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="flex h-[4.5rem] items-center justify-center rounded-full px-2 !text-2xl !shadow-2xl">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`!m-[0.3rem] !rounded-2xl border !border-[#60646b] px-[1.3rem] py-[0.7rem] hover:bg-[#41444d] ${
              page === currentPage
                ? "bg-[#41444d] font-bold text-white !shadow-2xl"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="!rounded-2xl border !border-[#60646b] px-[1.3rem] py-[0.7rem] !text-2xl !font-bold hover:bg-[#41444d]"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Pagination;
