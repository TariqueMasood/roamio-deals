/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import serviceStaycations from "../images/roamio-staycations.svg";
import serviceActivities from "../images/roamio-activities.svg";
import serviceDeals from "../images/roamio-deals.svg";
import serviceVisa from "../images/roamio-visa.svg";

const servicesData = [
    {
        id: 1,
        icon: serviceStaycations,
        title: "Staycations",
    },
    {
        id: 2,
        icon: serviceActivities,
        title: "Activities",
    },
    {
        id: 3,
        icon: serviceDeals,
        title: "Deals",
    },
    {
        id: 4,
        icon: serviceVisa,
        title: "Visa",
    },
];

const RoamioServices = () => {
    const Services = (props) => {
        const { icon, title } = props;
        return (
            <div css={roamioService}>
                <img src={icon} alt="" />
                <div css={titleCss}>{title}</div>
            </div>
        );
    };

    return (
        <section css={sectionCss}>
            <div css={containerCss}>
                <div css={roamioServicesContainer}>
                    {servicesData.map((service) => {
                        return (
                            <Services
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RoamioServices;

const sectionCss = css`
 padding-bottom: 10px;
`;

const containerCss = css`
  max-width: 1200px;
 margin: 0 auto;
`;

const roamioServicesContainer = css`
 display: flex;
 justify-content: space-around;
 max-width: ${800 / 16}rem;
 padding: 1.5em 0;
 margin: -56px auto 0;
 background-color: ${theme.colors.white};
 ${theme.css.boxShadow.boxShadowService};
 ${theme.css.borderRadius.borderRadius16};
 position: relative;
 z-index: 999;
`;

const roamioService = css`
 text-align: center;
 border-right: 1px solid ${theme.colors.themeColorLight};
 max-width: ${200 / 16}rem;
 width: 100%;

 :last-of-type {
  border-right: none;
 }
`;

const titleCss = css`
 font-size: 1em;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
 color: ${theme.colors.themeColor};
 margin-top: 0.5em;
`;
