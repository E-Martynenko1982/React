import React from "react";

const Pagination = ({ currentPage, usersPerPage, usersCount, onPageChange }) => {
  // кулькість сторінок
  const totalPages = Math.ceil(usersCount / usersPerPage);

  return (
    <div className="pagination">
      {/* Стрілка вліво завжди відображається, але кнопка вимикається на першій сторінці та текст зникає */}
      <button
        className="btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} // Кнопка вимкнена, якщо ми на першій сторінці
      >
        {currentPage > 1 && '←'} {/* Текст стрілки відображається лише якщо не перша сторінка */}
      </button>

      <span className="pagination__page">{currentPage}</span>

      {/* Стрілка праворуч завжди відображається, але кнопка вимикається на останній сторінці та текст зникає */}
      <button
        className="btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} //Кнопка вимкнена, якщо ми на останній сторінці
      >
        {currentPage < totalPages && '→'} { }
      </button>
    </div>
  );
};

export default Pagination;
