/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mobile from "../images/mobile-img.svg";
import scan from "../images/scan-img.svg";
import theme from "../styles/theme";

const Coupon = () => {
  return (
    <section className="pt" css={sectionCss}>
      <div className="container">
        <div css={containerWrapperCss}>
          <div css={appContainerCss}>
            <img src={mobile} alt="img" />
            <div css={titleContainerCss}>
              <div css={titleCss}>Get 5% off your 1st app booking</div>
              <div css={subtitleCss}>
                Booking's better on the app. Use promo code
                <span css={highLightTitleCss}> “BetterOnApp”</span> to save
              </div>
            </div>
          </div>
          <div css={scanContainerCss}>
            <div css={scanTextCss}>or</div>
            <div>
              <div css={scanTextCss}>Scan this QR</div>
              <img src={scan} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coupon;

const sectionCss = css`
  background: ${theme.colors.lightYellow};
`;

const containerWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const appContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const scanContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${80 / 16}em;
`;

const titleContainerCss = css`
  max-width: ${474 / 16}rem;
`;

const titleCss = css`
  ${theme.css.typography.headerText2};
  color: ${theme.colors.black};
  margin-bottom: 0.5em;
`;

const subtitleCss = css`
  ${theme.css.typography.subtitleText};
  color: ${theme.colors.black};
`;

const highLightTitleCss = css`
  ${theme.css.typography.subtitleText};
  color: ${theme.colors.black};
  font-weight: 600;
`;

const scanTextCss = css`
  ${theme.css.typography.buttonText};
  font-weight: 400;
  color: ${theme.colors.black};
`;
