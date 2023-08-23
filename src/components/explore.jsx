/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icon from "../images/star.svg";
import theme from "../styles/theme";

import Button from "./button"

const Explore = () => {
    return (
        <div className="container" >
            <div className="ptb">
                <div css={exploreCss}>Explore the peak of Dubai</div>
                <div css={buttonsContainer}>
                    <Button icon={icon} text="Top Trending in Dubai" />
                    <Button icon={icon} text="Top Discount" />
                    <Button icon={icon} text="Top Rated" />
                    <Button icon={icon} text="Top Selling" />
                </div>
            </div>
        </div>
    )
}

export default Explore;


const exploreCss = css`
   margin-bottom: ${24 / 16}rem;
   ${theme.css.typography.sectionHeaderText};

`

const buttonsContainer = css`
   display: flex;
   gap: 1.5em;
`