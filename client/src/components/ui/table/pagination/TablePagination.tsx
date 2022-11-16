import React, { useEffect, useState } from 'react';
import usePagination, { DOTS } from './usePagination';

const TablePagination = ({
  totalCount,
  changeItemsPerPage,
  pageSize,
  onPageChange,
  currentPage,
  siblingsCount = 1
}) => {
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    //@ts-ignore
    setTotalPages(Math.ceil(totalCount / pageSize));
  }, [pageSize]);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingsCount,
    pageSize
  });

  const handlePrevClick = () => {
    let changedPage = currentPage > 1 ? currentPage - 1 : currentPage;
    onPageChange(changedPage);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const handleChangePageSize = e => {
    changeItemsPerPage(+e.target.value);
  };

  return (
    <div className='Table'>
      <button onClick={() => onPageChange(1)} disabled={totalCount <= pageSize}>
        doublePr
      </button>
      <button onClick={() => handlePrevClick()} disabled={currentPage === 1}>
        pr
      </button>
      {paginationRange.map((pageNumber, index) => {
        let current = index + 1;

        if (pageNumber === DOTS) {
          return <p key={index}>&#8230;</p>;
        }

        return (
          <button
            key={index}
            active={currentPage === current}
            onClick={() => onPageChange(current)}
            disabled={totalCount <= pageSize}
          >
            {current}
          </button>
        );
      })}
      <button
        onClick={() => handleNextClick()}
        disabled={currentPage === totalPages}
      >
        next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={totalCount <= pageSize}
      >
        doubleNext
      </button>
      {/* </Pagination> */}
      {/* <Form.Select
        className=''
        defaultValue={pageSize}
        onChange={(e) => handleChangePageSize(e)}
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
    <option value="20">20</option> */}
    </div>
  );
};

export default TablePagination;
