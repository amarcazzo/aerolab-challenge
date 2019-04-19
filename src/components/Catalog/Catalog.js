import React from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import { redeemProduct } from "../../actions/productActions";
import { getUserPoints } from "../../actions/userActions";
import "./Catalog.min.css";

function Catalog(props) {
  const handleRedeem = async id => {
    await props.redeemProduct(id);
    await props.getUserPoints();
  };

  return (
    <div className="catalog-grid">
      {props.items.map(x => (
        <Product
          key={x._id}
          id={x._id}
          thumbnail={x.img.url}
          category={x.category}
          description={x.name}
          cost={x.cost}
          userPoints={props.userPoints}
          handleRedeem={handleRedeem}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  userPoints: state.user.points
});
const mapDispatchToProps = {
  redeemProduct,
  getUserPoints
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
