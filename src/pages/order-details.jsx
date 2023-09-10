/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import "swiper/css";
import "swiper/css/navigation";
import ItemCard from "../components/item-card";
import Button from "../components/button";
import star from "../images/star-dark.svg";
import location from "../images/location.svg";
import { useDispatch } from "react-redux";
import { add } from "../store/productSlice";
import { useParams } from "react-router";
import dealsData from "../data/dealsData";
import HotelDetails from "../components/hotel-details";
import Review from "../components/review";
import HotelServices from "../components/hotel-services";
import Sidebar from "../components/sidebar";

const OrderDetails = () => {
  const { productId } = useParams();
  const product = dealsData.find((p) => p._id === productId);

  return (
    <section css={sectionCss}>
      <div className="container">
        <div css={orderWrapperCss}>
          <div css={swiperContainer}>
            <img css={slideImgCss} src={product.cardImg} alt="banner" />
            <div css={orderContentCss}>
              <div css={orderHeadingCss}>{product.title}</div>
            </div>
            <div css={ratingWrapper}>
              <div>
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
              </div>
              <span css={reviewCss}>(4 reviews)</span>
              <span css={ratingCss}>Excellent</span>
            </div>
            <div css={locationCss}>
              <img src={location} alt="" />
              <div>{product.location}</div>
            </div>
            <HotelServices />
            <HotelDetails />
            <Review />
          </div>
          <Sidebar product={product} />
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;

const sectionCss = css`
  padding: ${60 / 16}em 0;
`;

const orderWrapperCss = css`
  display: flex;
  gap: 1em;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.white};
  }
  .swiper-button-prev::after,
  .swiper-button-next:after {
    font-size: ${16 / 16}rem;
  }
`;

const swiperContainer = css`
  max-width: 70%;
`;

const slideImgCss = css`
  width: 100%;
`;

const orderContentCss = css``;

const orderHeadingCss = css`
  margin-top: 1.5em;
  color: #282828;
  font-size: ${36 / 16}rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const ratingWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: ${15 / 16}em;
`;

const starIcon = css`
  width: 16px;
`;

const reviewCss = css`
  color: #83878a;
  font-size: ${20 / 16}rem;
  font-weight: 400;
`;

const ratingCss = css`
  color: #4a4a4a;
  font-size: ${20 / 16}rem;
  font-weight: 400;
`;

const locationCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 14.675px;
    height: 18px;
  }

  div {
    color: #4a4a4a;
    font-size: ${18 / 16}rem;
    font-weight: 500;
  }
`;
