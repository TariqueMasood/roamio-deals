/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartCard from "../components/cart-card";
import cartImage from "../images/cart-img1.svg";
import deleteImage from "../images/delete-icon.svg";
import calendarImage from "../images/calendar.svg";
import personImage from "../images/person-icon.svg";

const CartData = [
  {
    id: 1,
    cartImg: cartImage,
    heading: "Weekday Stay for 2 adults & 2 children below 12 years",
    deleteIcon: deleteImage,
    calendarImg: calendarImage,
    calendarDate: "12 May, 13 May, 14 May (3 nights)",
    personIcon: personImage,
    personCount: "1 x Adult",
    hotelPrice: "230.00",
    currency: "AED",
  },
];

const Cart = () => {
  return (
    <div className="container">
      <div css={cartContainer}>
        <div css={cartHeadingCss}>cart</div>
        <div css={cartWrapper}>
          <div css={cartCard}>
            {CartData.map((card, index) => {
              return (
                <CartCard
                  key={index}
                  cartImg={card.cartImg}
                  heading={card.heading}
                  deleteIcon={card.deleteIcon}
                  calendarImg={card.calendarImg}
                  calendarDate={card.calendarDate}
                  personIcon={card.personIcon}
                  personCount={card.personCount}
                  hotelPrice={card.hotelPrice}
                  currency={card.currency}
                />
              );
            })}
          </div>
          <div css={payment}>
            <div css={promocodeWrapper}>
              <div css={promocode}>
                <div css={promocodeCss}>Apply Promocode</div>
                <input type="text" />
              </div>
              <div css={paymentMethod}>
                <div css={paymentMethodCss}>Select your payment method</div>
                <div css={paymentOption}>
                  <select name="select card" id="">
                    <option value="">credit card</option>
                    <option value="">credit card</option>
                    <option value="">credit card</option>
                  </select>
                </div>
              </div>
            </div>
            <div css={totalAmountWrapper}>
              <div css={totalAmount}>
                <div css={totalAmountTitle}>Total</div>
                <div css={totalAmountTitle}>AED 747.00</div>
              </div>
              <div css={totalAmount}>
                <div css={totalAmountTitle}>Promo Code</div>
                <div css={totalAmountCss}>-AED 74.70</div>
              </div>
              <div css={totalAmount}>
                <div css={totalAmountTitle}>Roamio Credits</div>
                <div css={totalAmountCss}>-AED 5.00</div>
              </div>
              <div css={totalAmount}>
                <div css={totalAmountTitle}>Total Saving</div>
                <div css={totalAmountCss}>-AED 125.00</div>
              </div>
              <div css={totalAmount}>
                <div css={totalAmountTitle}>TAX</div>
                <div css={totalAmountTitle}>AED 7.00</div>
              </div>
              <div css={strokeCss}></div>
              <div css={totalAmount}>
                <div css={subTotal}>Sub Total</div>
                <div css={subTotal}>AED 522.30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const cartContainer = css`
  padding: ${40 / 16}em;
`;

const cartHeadingCss = css`
  margin-bottom: ${30 / 16}em;
  color: #282828;
  font-size: ${28 / 16}rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const cartWrapper = css`
  border-radius: 15px;
  border: 1px solid #cdcfd0;
  padding: 30px;
  background: #fff;
`;

const cartCard = css``;

const payment = css`
  margin-top: ${16 / 16}em;
  display: flex;
  justify-content: space-between;
`;

const promocodeWrapper = css`
  max-width: 360px;
  width: 100%;
`;

const promocode = css`
  input {
    width: 90%;
    padding: 12px;
  }
`;

const promocodeCss = css`
  color: #282828;
  font-size: ${18 / 16}rem;
  font-weight: 400;
  margin-bottom: ${10 / 16}em;
`;

const paymentMethod = css``;

const paymentMethodCss = css`
  color: #282828;
  font-size: ${18 / 16}rem;
  font-weight: 400;
  margin-top: ${20 / 16}em;
  margin-bottom: ${10 / 16}em;
`;

const paymentOption = css`
  select {
    // max-width: 360px;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    border: 1px solid fff3e3;
    outline: none;
    border-radius: 10px;
    background: #fff3e3;
  }
`;

const totalAmountWrapper = css`
  max-width: 522px;
  width: 100%;
  padding: ${20 / 16}em;
  border-radius: 12px;
  background: #fff3e3;
`;

const totalAmount = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${14 / 16}em;
`;

const totalAmountTitle = css`
  color: #282828;
  font-size: ${18 / 16}rem;
  font-weight: 400;
`;

const totalAmountCss = css`
  color: #ff3500;
  font-size: ${18 / 16}rem;
  font-weight: 400;
`;

const subTotal = css`
  color: #282828;
  font-size: ${20 / 16}rem;
  font-weight: 500;
`;

const strokeCss = css`
  border: 1px dotted #83878a;
  margin-bottom: ${14 / 16}em;
`;
