import React from "react";
import ReactPaginate from "react-paginate";

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageChange}
        pageRangeDisplayed={7}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        forcePage={currentPage - 1}
        containerClassName="pagination__container"
        pageClassName="pagination__page"
        activeClassName="pagination__active"
        previousClassName="pagination__previous"
        nextClassName="pagination__next"
      />
    </div>
  );
};

export default Pagination;
