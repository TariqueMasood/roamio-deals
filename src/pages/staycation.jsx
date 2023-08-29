/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ExternalLink from "../components/external-link";
import theme from "../../src/styles/theme";
import Card from "../components/card";
import heartIcon from "../images/heart-icon.svg";
import location from "../images/location.svg";
import starIcon from "../images/star.svg";
import mariana from "../images/mariana.svg";
import paramount from "../images/paramount.svg";
import S19 from "../images/S19.svg";
import premier from "../images/premier.svg";

const Staycation = () => {
  const cardData = [
    {
      cardImage: mariana,
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: paramount,
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: S19,
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: premier,
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
  ];

  return (
    <section className="ptb">
      <div className="container">
        <div css={sectionHeaderCss}>
          <div css={staycationCss}>Staycation</div>
          <ExternalLink anchorLink="#" linkText="View All" />
        </div>
        <div css={cardWrapperCss}>
          {cardData.map((card, index) => {
            return (
              <Card
                key={index}
                cardImg={card.cardImage}
                cardHeartIcon={card.cardHeartIcon}
                title={card.title}
                locationIcon={card.locationIcon}
                location={card.location}
                rating={card.rating}
                ratingIcon={card.ratingIcon}
                reviewCount={card.reviewCount}
                review={card.review}
                price={card.price}
                currency={card.currency}
                offer={card.offer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Staycation;

const sectionHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75em;
`;

const staycationCss = css`
  ${theme.css.typography.sectionHeaderText};
`;

const cardWrapperCss = css`
  display: flex;
  gap: 1.5em;
  overflow: auto;
  scroll-snap-type: x mandatory;
  ${theme.css.hiddenScrollbarCss};
`;
