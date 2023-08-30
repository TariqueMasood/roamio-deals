/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icon from "../images/star.svg";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

import Button from "../components/button";

const Explore = () => {
  return (
    <section className="ptb">
      <div className="container">
        <div css={exploreCss}>Explore the peak of Dubai</div>
        <div css={buttonsContainer}>
          <Button icon={icon} text="Top Trending in Dubai" />
          <Button icon={icon} text="Top Discount" />
          <Button icon={icon} text="Top Rated" />
          <Button icon={icon} text="Top Selling" />
        </div>
      </div>
    </section>
  );
};

export default Explore;

const exploreCss = css`
   margin-bottom: ${24 / 16}rem;
   font-size: 20px;
   font-weight: 600;

   ${mq("md")}{
    margin-bottom: ${24 / 16}rem;
    ${theme.css.typography.sectionHeaderText};
   }
`;

const buttonsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;


  ${mq("md")} {
    gap: 1.5em;
  }
`;
