/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import img2 from "../images/order-img-2.svg";

const ItemCard = (props) => {
  const {
    heading,
    offerPrice,
    price,
    currency,
    minusImg,
    count,
    plusImg,
    quantity,
  } = props;

  return (
    <>
      <div css={ItemCardCss}>
        <div css={ItemCardTitle}>{heading}</div>
        <div css={titleCss}>
          <span css={offerCss}>{offerPrice}</span>
          <span css={priceCss}>{price}</span>
          <span css={currencyCss}>{currency}</span>
        </div>
        <div css={countWrapperCss}>
          <img css={minusIcon} src={minusImg} alt="img" />
          <span css={countCss}>{count}</span>
          <img css={plusIcon} src={plusImg} alt="img" />
          <span css={quantityCss}>{quantity}</span>
        </div>
      </div>
    </>
  );
};

export default ItemCard;

const ItemCardCss = css`
  padding-bottom: ${16 / 16}em;
  margin-bottom: ${15 / 16}em;
  padding-right: ${20 / 16}em;
  padding-left: ${20 / 16}em;
  padding-top: ${16 / 16}em;
  border: 1px solid #cdcfd0;
  border-radius: 12px;
  background: #fff;
`;

const ItemCardTitle = css`
  margin-bottom: ${16 / 16}em;
  font-size: ${16 / 16}rem;
  font-weight: 500;
  color: #282828;
`;

const titleCss = css`
  margin-bottom: ${16 / 16}em;
`;

const offerCss = css`
  text-decoration: line-through;
  font-size: ${12 / 16}rem;
  margin-right: 8px;
  font-weight: 400;
  color: #4a4a4a;
`;

const priceCss = css`
  font-size: ${18 / 16}rem;
  margin-right: 4px;
  font-weight: 500;
  color: #ff3500;
`;

const currencyCss = css`
  font-size: ${12 / 16}rem;
  font-weight: 400;
  color: #4a4a4a;
`;

const countWrapperCss = css`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const minusIcon = css`
  cursor: pointer;
  display: block;
`;

const countCss = css`
  display: block;
`;

const plusIcon = css`
  cursor: pointer;
  display: block;
`;

const quantityCss = css`
  font-size: ${12 / 16}rem;
  font-weight: 400;
  display: block;
  color: #83878a;
`;
