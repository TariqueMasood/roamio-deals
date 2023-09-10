/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ExternalLink from "../components/external-link";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";
import dealsData from "../data/dealsData";
import Card from "../components/card";

const Deals = () => {
  return (
    <section className="ptb">
      <div className="container">
        <div css={sectionHeaderCss}>
          <div css={titleCss}>Daily Deals</div>
          <ExternalLink anchorLink="#" linkText="View All" />
        </div>
        <div css={cardWrapperCss}>
          {dealsData.map((product) => {
            return <Card {...product} key={product._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Deals;

const sectionHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75em;
`;

const titleCss = css`
  font-size: 20px;
  font-weight: 600;

  ${mq("md")} {
    ${theme.css.typography.sectionHeaderText};
  }
`;

const cardWrapperCss = css`
  display: flex;
  gap: 1.5em;
  overflow: auto;
  scroll-snap-type: x mandatory;
  ${theme.css.hiddenScrollbarCss};
`;
