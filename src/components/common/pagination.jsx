import React from "react";
import "../../App.css";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 && currentPage === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  function listElement(text, pageChange, className, key) {
    return (
      <li key={key} className={className}>
        <a className="page-link" onClick={() => onPageChange(pageChange)}>
          {text}
        </a>
      </li>
    );
  }
  return (
    <nav className="paginationNav">
      <ul className="pagination">
        {listElement("First", 1, "page-item clickable")}
        {pages.map((page) =>
          listElement(
            page,
            page,
            page === currentPage
              ? "page-item clickable active"
              : "page-item clickable",
            page
          )
        )}
        {listElement("Last", pagesCount, "page-item clickable")}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
