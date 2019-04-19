import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";
import { ReactComponent as BuyWhite } from "../../assets/icons/buy-white.svg";
import "./Product.min.css";

function Product(props) {
  const handleRedeem = async () => {
    await props.handleRedeem(props.id);
  };

  const notEnoughCoins = `You need ${props.cost - props.userPoints}`;
  const buyBlue =
    props.userPoints >= props.cost ? (
      <BuyBlue className="btn redeem-sm blue" />
    ) : (
      <span className="btn redeem-sm blue cant-redeem">
        {notEnoughCoins}
        <Coin />
      </span>
    );

  const buyWhite =
    props.userPoints >= props.cost ? (
      <BuyWhite className="btn redeem-sm white" />
    ) : (
      <span className="btn redeem-sm cant-redeem content">
        {notEnoughCoins}
        <Coin />
      </span>
    );

  const redeemBtn =
    props.userPoints >= props.cost ? (
      <button className="btn redeem" onClick={handleRedeem}>
        Redeem now
      </button>
    ) : null;

  return (
    <div className="card">
      <div className="card-body">
        {buyBlue}
        <img className="card-thumbnail" src={props.thumbnail} alt="Thumbnail" />
        <hr />
        <p className="product-label card-category">{props.category}</p>
        <p className="product-label card-description">{props.description}</p>
        <div className="card-content">
          {buyWhite}
          <span className="card-cost">
            {props.cost} <Coin />
          </span>
          {redeemBtn}
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  userPoints: PropTypes.number.isRequired,
  handleRedeem: PropTypes.func.isRequired
};

export default Product;
