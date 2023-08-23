/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ExternalLink from "../components/external-link";
import theme from "../../src/styles/theme";
import Card from "./card";
import alburj from "../images/burj-khalifa.svg";
import heartIcon from "../images/heart-icon.svg";
import location from "../images/location.svg";
import starIcon from "../images/star.svg";
import aquarium from "../images/Aquarium.svg";
import dubaiPark from "../images/dubai-park.svg";
import palmTower from "../images/palm-tower.svg";
import lounge from "../images/lounge.svg";


const Bucket = () => {

    const cardData = [
        {
            cardImage: aquarium,
            cardHeartIcon: heartIcon,
            title: "The Lost Chamber of",
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
            cardImage: dubaiPark,
            cardHeartIcon: heartIcon,
            title: "Dubai Park & Resorts",
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

            cardImage: palmTower,
            cardHeartIcon: heartIcon,
            title: "The Palm Tower in Dubai",
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

            cardImage: lounge,
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
            offer: 23
        },
    ]

    return (
        <section className="ptb">
            <div className="container">
                <div css={sectionHeaderCss}>
                    <div css={staycationCss}>Dubai’s Bucket List</div>
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

export default Bucket;

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
`;