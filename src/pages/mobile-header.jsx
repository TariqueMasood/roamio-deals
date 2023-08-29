import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import mobileHeaderImg from "../images/m-header-background.svg";
import mobileCart from "../images/mobile-cart.svg";
import serachBlack from "../images/search-black.svg";

const MobileHeader = () => {
  return (
    <section>
      <div css={mobileHeaderCss}>
        <div className="container">
          <div css={mobileHeaderTitleCss}>
            <div>
              <div css={mobileTitle1Css}>Hi Mohammed,</div>
              <div css={mobileTitle2Css}>Welcome to <span css={mobileTitle3Css}>Roamio Deals!</span></div>
            </div>
            <div>
              <img src={mobileCart} alt="image" />
            </div>
          </div>
          <div css={searchInputCss}>
            <div css={serachIconCss}>
              <img src={serachBlack} alt="image" />
            </div>
            <input
              type="text"
              placeholder="Search for destinations or activities" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default MobileHeader;



const mobileHeaderCss = css`
  background: url(${mobileHeaderImg}), no-repeat;
  max-width: ${393 / 16}em;
  width: 100%;
  height: ${196 / 16}em;
`;

const mobileHeaderTitleCss = css`
   padding: 1rem;
   display: flex;
   justify-content: space-between;
`

const mobileTitle1Css = css`
  ${theme.css.typography.mobileTitleText1};
  color: ${theme.colors.black800};
`;

const mobileTitle2Css = css`
  ${theme.css.typography.mobileTitleText2};
  color:${theme.colors.primaryText};
`;

const mobileTitle3Css = css` 
  font-family: 'Fredoka', sans-serif;
  color: ${theme.colors.themeColor};
`;


const searchInputCss = css`
  display: flex;
  justify-content: space-between;
  height: 41px;
  ${theme.css.borderRadius.borderRadius8};
  border: 1px solid #83878A;
  background:  #FFF;
  backdrop-filter: blur(4px);
  max-width: 323px;
  width: 100%;

  input{
  border: #f6f6f6;
  background-color: transparent;
  color: #83878a;
  outline: none;
  padding: 0 1em;
  width: 100%;
`;

const serachIconCss = css`
  margin-right: 0.3em;
  width: 20px;
  height: 20px;
  line-height: 45px;
  text-align: center;
`;