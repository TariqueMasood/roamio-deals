import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import wishListImage from "../../images/wishlist-icon.svg";
import cart from "../../images/cart.svg"
import roamioLogo from "../../images/logo.svg";
import mobileHeaderImg from "../../images/m-header-background.svg";
import mobileCart from "../../images/mobile-cart.svg";
import serachBlack from "../../images/search-black.svg";
import useViewportWidth from "../../hooks/use-viewport-width";
import RoamioServices from "../../pages/roamio-services";
import MobileHome from "../../pages/mobile-home";


const HeaderDesktop = () => {
  return (
    <section css={hContainerCss}>
      < div className="container" >
        <header css={wrapperCss}>
          <div css={leftCss}>
            <div css={logoCss}>
              <img src={roamioLogo} alt="logo" />
            </div>
            <div css={dropCss}>
              <select css={selectCss} name="seclectlist">
                <option value="option-1">AED</option>
                <option value="option-2">INR</option>
                <option value="option-3">USD</option>
              </select>
              <select css={selectCss} name="seclectlist">
                <option value="option-1">Eng</option>
                <option value="option-2">Arb</option>
              </select>
            </div>
          </div>
          <div css={centerCss}>
            <input
              type="text"
              placeholder="Search for destinations or activities" />
            <div css={serachIconCss}>
              <img src={serachBlack} alt="image" />
            </div>
          </div>
          <div css={rightCss}>
            <div css={cartCss}>
              <div css={actionCss}>
                <img src={wishListImage} alt="wishlist" />
                <span >Wishlist</span>
              </div>
              <div css={actionCss}>
                <img src={cart} alt="wishlist" />
                <span> Cart</span>
              </div>
            </div>
            <div css={loginCss}>
              <button css={loginBtnCss1} type="button">Login</button>
              <button css={loginBtnCss2} type="button">Sign Up</button>
            </div>
          </div>
        </header>
      </div >
    </section >
  );
};

const HeaderMobile = () => {
  return (
    <section className="container">
      <div>
        <div css={mobileHeaderCss}>
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
            <div css={mobileSearchCss}>
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
};

const Header = () => {
  const isLaptopView = useViewportWidth("md");
  return (
    <>
      {
        isLaptopView ? <HeaderDesktop /> :
          <>
            <HeaderMobile />
            <RoamioServices />
            <MobileHome />
          </>
      }
    </>

  )
};

export default Header;

const hContainerCss = css`
  padding: 1em 0;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
`;


const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const leftCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2em;
`;

const logoCss = css`

`;

const dropCss = css`
  display: flex;
  column-gap: 0.75em;
`;

const selectCss = css`
  ${theme.css.typography.linkText2};
  ${theme.css.borderRadius.borderRadius8};
  ${theme.colors.primaryText};
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;
  font-family: Poppins, sans-serif;
`;


const centerCss = css`
  display: flex;
  justify-content: space-between;
  height: 41px;
  ${theme.css.borderRadius.borderRadius8};
  background: #f6f6f6;
  backdrop-filter: blur(4px);
  max-width: 427px;
  width: 100%;

  input{
  border: #f6f6f6;
  background-color: transparent;
  color: #83878a;
  outline: none;
  padding: 0 1em;
  width: 100%;
  }
`;

const serachIconCss = css`
  width: 41px;
  height: 41px;
  line-height: 45px;
  text-align: center;
`;


const rightCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const cartCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  color: #cdcfd0;
`;

const actionCss = css`
  display: flex;
  gap: 0.2rem;
`;

const loginCss = css`
  button{
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    ${theme.css.borderRadius.borderRadius6}
  }
`;

const loginBtnCss1 = css`
  color:${theme.colors.white};
  margin-right: 7px;
  color: #ff3500;
`;

const loginBtnCss2 = css`
   background: linear-gradient(180deg, #fe9000 0%, #ff3500 100%);
   color:${theme.colors.white};
`;

const mobileHeaderCss = css`
position: relative;
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
  ${theme.css.borderRadius.borderRadius8};
  border: 1px solid #83878A;
  background:  #FFF;
  backdrop-filter: blur(4px);
  height: 41px;
  max-width: 323px;
  width: 100%;
  position: absolute;
  z-index: 9999;
  top: 20px;
  left: 20px;

  input{
  border: #f6f6f6;
  background-color: transparent;
  color: #83878a;
  outline: none;
  padding: 0 1em;
  width: 100%;
`;

const mobileSearchCss = css`
  margin-left: 0.3em;
  width: 20px;
  height: 20px;
  line-height: 45px;
  text-align: center;
`;

