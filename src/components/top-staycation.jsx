/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import image1 from "../images/top-stay-1.svg";
import image2 from "../images/top-stay-2.svg";
import ExternalLink from "./external-link";

const topStaycationData = [
    {
        id: 1,
        title: "Experience Better",
        headerText: "Top Staycation Around UAE",
        image: image1,
        anchorLink: "#",
    },
    {
        id: 2,
        title: "Experience More",
        headerText: "Top Activities Around UAE",
        image: image2,
        anchorLink: "#",
    },
];

const TopStay = (props) => {
    const { title, headerText, image } = props;
    return (
        <div css={imageContainerCss}>
            <img css={imageCss} src={image} alt="image" />
            <div css={titleWrapperCss} className="text">
                <div css={titleCss}>{title}</div>
                <div css={headerCss}>{headerText}</div>
                <a href="#" css={linkCss}>Explore</a>
            </div>
        </div>
    );
};

const TopStaycation = () => {
    return (
        <section className="ptb">
            <div className="container">
                <div css={topStayContainerCss}>
                    {topStaycationData.map((card, index) => {
                        return (
                            <TopStay
                                key={index}
                                title={card.title}
                                headerText={card.headerText}
                                image={card.image}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopStaycation;

const imageContainerCss = css`
  position: relative;
`;

const topStayContainerCss = css`
  display: flex;
  gap: ${24 / 16}em;
`;

const imageCss = css`
  max-width: 100%;
`;

const titleWrapperCss = css`
position: absolute;
color : #fff;
bottom: 3rem;
left: 3rem;
`;

const titleCss = css`
   ${theme.css.typography.categoryText};
   color: ${theme.colors.white};
   font-weight: 500;
`;

const headerCss = css`
  ${theme.css.typography.headerText1};
  color: ${theme.colors.white};
  margin-bottom: 1em;
`;

const linkCss = css`
 display: inline-block;
 background: ${theme.colors.white};
 ${theme.css.borderRadius.borderRadius8};
 color: ${theme.colors.black};
 ${theme.css.typography.linkText2};
 padding: 1em 2em;
`;

