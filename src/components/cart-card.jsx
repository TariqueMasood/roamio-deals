/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import cartImg from "../images/cart-img1.svg";
import deleteImg from "../images/delete-icon.svg";
import calendarImg from "../images/calendar.svg";
import personImg from "../images/person-icon.svg";

const CartCard = (props) => {
  const {
    cartImg,
    heading,
    deleteIcon,
    calendarImg,
    calendarDate,
    personIcon,
    personCount,
    hotelPrice,
    currency,
  } = props;
  return (
    <div css={cartWrapper}>
      <div>
        <img src={cartImg} alt="" />
      </div>
      <div css={cartTitle}>
        <div css={cartHeading}>
          <div css={headingCss}>{heading}</div>
          <div>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
        <div css={calendarWrapper}>
          <img src={calendarImg} alt="" />
          <div css={calendarCss}>{calendarDate}</div>
        </div>
        <div css={person}>
          <img src={personIcon} alt="" />
          <div css={calendarCss}>{personCount}</div>
        </div>
        <div css={price}>
          <div>
            <span css={hotelPriceCss}>{hotelPrice}</span>
            <span css={currencyCss}>{currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

const cartWrapper = css`
  border-radius: 15px;
  background: #fff3e3;
  padding: 20px;
  gap: 25px;
  display: flex;
`;

const cartTitle = css``;

const cartHeading = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${25 / 16}em;
`;

const headingCss = css`
  color: #282828;
  font-size: ${25 / 16}rem;
  font-weight: 500;
`;

const calendarWrapper = css`
  display: flex;
  gap: 12px;
  margin-bottom: ${10 / 16}em;
`;

const calendarCss = css`
  color: #282828;
  font-size: ${18 / 16}rem;
  font-weight: 400;
`;

const person = css`
  display: flex;
  gap: 12px;
`;

const price = css`
  display: flex;
  justify-content: flex-end;
`;

const hotelPriceCss = css`
  color: #ff3500;
  font-size: 30px;
  font-weight: 500;
`;

const currencyCss = css`
  color: #282828;
  font-size: ${18 / 16}em;
  font-weight: 400;
`;
