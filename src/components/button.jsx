/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const Button = (props) => {
  const { text, icon } = props;
  return (
    <button css={buttonContainerCss}>
      {icon && <img src={icon} css={buttonIconCss} alt="" />}
      <span css={buttonTextCss}>{text}</span>
    </button>
  );
};

export default Button;

const buttonContainerCss = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: ${10 / 16}em;
  ${theme.css.gradient.themeGradient};
  border: ${theme.colors.themeColor};
  ${theme.css.borderRadius.borderRadius8};

  ${mq("md")} {
    padding: ${20 / 16}em;
  }
`;

const buttonIconCss = css`
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
`;

const buttonTextCss = css`
  ${theme.css.typography.buttonText};
  color: ${theme.colors.white};
`;
