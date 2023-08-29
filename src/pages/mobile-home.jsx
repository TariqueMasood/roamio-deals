import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import envelope from "../images/home-envelope.svg";
import save from "../images/heart.svg";
import deals from "../images/deals-icon.svg";
import account from "../images/account.svg";
import theme from "../styles/theme";

const MobileHome = () => {
  return (
    <nav css={mobileHeader}>
      <div className="container" css={mobileHomeCss}>
        <div>
          <img src={envelope} alt="img" />
          <div>Home</div>
        </div>
        <div>
          <img src={save} alt="img" />
          <div>Saved</div>
        </div>
        <div>
          <img src={deals} alt="img" />
          <div>Deals</div>
        </div>
        <div>
          <img src={account} alt="img" />
          <div>Account</div>
        </div>
      </div>
    </nav>
  );
};

export default MobileHome;

const mobileHeader = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${theme.colors.white};
  box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const mobileHomeCss = css`
  text-align: center;
  display: flex;
  justify-content: space-around;

  div {
    cursor: pointer;
  }
`;
