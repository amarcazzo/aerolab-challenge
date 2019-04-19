import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/aerolab-logo.svg";
import { ReactComponent as CoinImg } from "../../assets/icons/coin.svg";
import { getUser } from "../../actions/userActions";
import "./Header.min.css";

function Header(props) {
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <div className="header">
      <Logo />
      <div className="user-section">
        <span className="header-label">{props.name}</span>
        <div className="user-coins">
          <span className="header-label">{props.points}</span>
          <CoinImg />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
