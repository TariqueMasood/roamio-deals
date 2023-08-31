/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactDOM from "react-dom";
import theme from "../styles/theme";
import logo from "../images/logo.svg";
import Button from "../components/button";
import facebook from "../images/facebook-icon.svg";
import google from "../images/google-icon.svg";
import mail from "../images/mail-icon.svg";

const Login = () => {
  return (
    <div css={loginWrapperCss}>
      <div css={modalImgCss}>
        <img src={logo} alt="" />
        <div css={loginTitleCss}>Login or Sign up</div>
        <input
          type="tel"
          name="telphone"
          pattern="[0-9]{10}"
          title="Ten digits code"
          required
        />
        <div css={loginSubTitleCss}>
          Loggin in with unregistered phone number creates a new Romaio account.
        </div>
        <div css={loginBtnCss}>
          <Button text="Send verification code" />
        </div>
        <div css={LinkCss}>
          <a href="#">Login with password</a>
        </div>
        <div css={loginCss}>or login with</div>
        <div css={loginWithCss}>
          <div>
            <img src={facebook} alt="img" />
          </div>
          <div>
            <img src={google} alt="img" />
          </div>
          <div>
            <img src={mail} alt="img" />
          </div>
        </div>
        <div css={modalPolicyCss}>
          By signing up, you’re agree to our <span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

const loginWrapperCss = css`
  text-align: center;
`;

const modalImgCss = css`
  padding: ${50 / 16}em;
  max-width: ${353 / 16}em;
  width: 100%;
`;

const loginTitleCss = css`
  margin-top: ${20 / 16}em;
  margin-bottom: ${20 / 16}em;
  ${theme.css.typography.mobileTitleText1};
  color: ${theme.colors.black800};
`;

const loginSubTitleCss = css`
  margin-top: ${15 / 16}em;
  margin-bottom: ${15 / 16}em;
  color: #83878a;
  ${theme.css.typography.modalText};
`;

const loginBtnCss = css``;

const LinkCss = css`
  margin-top: ${15 / 16}em;
  margin-bottom: ${15 / 16}em;
  ${theme.css.typography.linkText2};

  a {
    color: #ff3500;
  }
`;

const loginCss = css`
  margin-bottom: ${15 / 16}em;
  ${theme.css.typography.modalText};
  color: ${theme.colors.black800};
`;

const loginWithCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  div {
    width: 45px;
    height: 45px;
    background: #edf2f8;
    border-radius: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const modalPolicyCss = css`
  margin-top: ${15 / 16}em;
  ${theme.css.typography.modalText};

  span {
    color: ${theme.colors.themeColor};
    cursor: pointer;
  }
`;
