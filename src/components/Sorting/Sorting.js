import React, { useState } from "react";
import "./Sorting.min.css";

function Sorting(props) {
  const [sort, setSort] = useState(0);
  const handleSort = e => {
    const newSort = Number(e.target.id);
    setSort(newSort);
    props.handleSort(newSort);
  };

  return (
    <div>
      <ul className="sort-options">
        <label className="sort-label">Sort by:</label>
        <li
          id="0"
          className={sort === 0 ? "sort-item sort-active" : "sort-item"}
          onClick={handleSort}
        >
          Most recent
        </li>
        <li
          id="1"
          className={sort === 1 ? "sort-item sort-active" : "sort-item"}
          onClick={handleSort}
        >
          Lowest price
        </li>
        <li
          id="2"
          className={sort === 2 ? "sort-item sort-active" : "sort-item"}
          onClick={handleSort}
        >
          Highest price
        </li>
      </ul>
    </div>
  );
}

Sorting.propTypes = {};

export default Sorting;
