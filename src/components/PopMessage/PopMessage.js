import React from "react";
import { cleanLastRedeemed } from "../../actions/productActions";
import { connect } from "react-redux";
import "./PopMessage.min.css";

function PopMessage(props) {
  const { type, title, message, show } =
    props.lastRedeemed.status === 200
      ? {
          type: "success",
          title: "Yay!",
          message: props.lastRedeemed.msg,
          show: "show"
        }
      : {
          type: "error",
          title: "Oh snap!",
          message: props.lastRedeemed.msg,
          show: ""
        };

  const handleClick = () => props.cleanLastRedeemed();

  return (
    <div className={`pop-message ${type} ${show}`}>
      <div className="pop-header">
        <h2 className="pop-title">{title}</h2>
        <button className="btn pop-close" onClick={handleClick}>
          X
        </button>
      </div>
      <p className="pop-body">{message}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  lastRedeemed: state.products.lastRedeemed
});

const mapDispatchToProps = {
  cleanLastRedeemed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopMessage);
