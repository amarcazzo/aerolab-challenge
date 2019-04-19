import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Catalog from "../Catalog/Catalog";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import Sorting from "../Sorting/Sorting";
import "../Catalog/Catalog.min.css";

function Pagination(props) {
  useEffect(() => {
    props.getProducts();

    return () => {};
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [currentItems, setCurrentItems] = useState(props.products);

  const handleSort = type => {
    switch (type) {
      case 1:
        setCurrentItems([...props.products].sort((a, b) => a.cost - b.cost));
        break;
      case 2:
        setCurrentItems([...props.products].sort((a, b) => b.cost - a.cost));
        break;
      default:
        setCurrentItems(props.products);
        break;
    }
  };

  const handleClick = e => {
    if (e.target.name === "next" && indexOfLastItem < props.products.length) {
      setCurrentPage(currentPage + 1);
    } else if (e.target.name === "previous") {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="catalog">
      <div className="catalog-header">
        <label className="catalog-label">
          {indexOfLastItem} of {props.products.length} products
        </label>
        <div className="divider" />
        <Sorting handleSort={handleSort} />
        <div className="buttons">
          <button
            name="previous"
            className={
              currentPage > 1 ? "previous-page" : "previous-page hidden"
            }
            onClick={handleClick}
            style={{ backgroundImage: `url(${ArrowLeft})` }}
          />
          <button
            name="next"
            className="next-page"
            onClick={handleClick}
            style={{ backgroundImage: `url(${ArrowRight})` }}
          />
        </div>
      </div>
      <hr />
      <Catalog
        items={
          currentItems.length > 0
            ? currentItems.slice(indexOfFirstItem, indexOfLastItem)
            : [...props.products].slice(indexOfFirstItem, indexOfLastItem)
        }
      />
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products.items
});

const mapDispatchToProps = {
  getProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
