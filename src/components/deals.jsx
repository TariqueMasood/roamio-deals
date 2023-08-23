/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import alburj from "../images/burj-khalifa.svg";
import safari from "../images/safari.svg";
import cruise from "../images/cruise.svg";
import location from "../images/location.svg";
import starIcon from "../images/star.svg";
import heartIcon from "../images/heart-icon.svg";
import Card from "./card";
import ExternalLink from "./external-link";
import theme from "../styles/theme";


const Deals = () => {
    const cardData = [
        {
            cardImage: alburj,
            cardHeartIcon: heartIcon,
            title: "Burj Khalifa Observation Deck",
            locationIcon: location,
            location: "Al Ain",
            rating: "4.2",
            ratingIcon: starIcon,
            reviewCount: "(4)",
            review: "Excellent",
            price: "1,800",
            currency: "AED",
            offer: 23
        },
        {
            cardImage: safari,
            cardHeartIcon: heartIcon,
            title: "Burj Khalifa Observation Deck",
            locationIcon: location,
            location: "Al Ain",
            rating: "4.2",
            ratingIcon: starIcon,
            reviewCount: "(4)",
            review: "Excellent",
            price: "1,800",
            currency: "AED",
            offer: 23
        },
        {
            cardImage: cruise,
            cardHeartIcon: heartIcon,
            title: "Burj Khalifa Observation Deck",
            locationIcon: location,
            location: "Al Ain",
            rating: "4.2",
            ratingIcon: starIcon,
            reviewCount: "(4)",
            review: "Excellent",
            price: "1,800",
            currency: "AED",
            offer: 23
        }
    ]
    return (
        <section className="ptb">
            <div className="container">
                <div css={sectionHeaderCss}>
                    <div css={titleCss}>Daily Deals</div>
                    <ExternalLink anchorLink="#" linkText="View All" />
                </div>
                <div css={cardWrapperCss}>
                    {
                        cardData.map((card, index) => {
                            return (
                                <Card key={index} cardImg={card.cardImage} cardHeartIcon={card.cardHeartIcon} title={card.title} locationIcon={card.locationIcon} location={card.location} rating={card.rating} ratingIcon={card.ratingIcon} reviewCount={card.reviewCount} review={card.review} price={card.price} currency={card.currency} offer={card.offer} />
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Deals;

const sectionHeaderCss = css`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 1.75em;
`

const titleCss = css`
    ${theme.css.typography.sectionHeaderText};
`;

const cardWrapperCss = css`
     display: flex;
     gap: 1.5em;
    `;

