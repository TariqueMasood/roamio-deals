import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import envelope from "../images/home-envelope.svg";
import save from "../images/heart.svg";
import deals from "../images/deals-icon.svg";
import account from "../images/account.svg";

const MobileHome = () => {
    return (
        <section>
            <div className="container" css={mobileHomeCss}>
                <div>
                    <img src={envelope} alt="image" />
                    <div>Home</div>
                </div>
                <div>
                    <img src={save} alt="image" />
                    <div>Saved</div>
                </div>
                <div>
                    <img src={deals} alt="image" />
                    <div>Deals</div>                </div>
                <div>
                    <img src={account} alt="image" />
                    <div>Account</div>
                </div>
            </div>
        </section>
    );
};

export default MobileHome;


const mobileHomeCss = css`
  text-align: center;
  display: flex;
  justify-content: space-around;

  div {
    cursor: pointer;
  }
`;