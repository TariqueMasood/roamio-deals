import { css } from "@emotion/react";
import theme from "./theme";
import { mq } from "./breakpoints";

export default css`
html {
  font-size: 70%;

  ${mq("md")} {
    font-size: 100%;
  }
}
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    color: ${theme.colors.primaryText};
    font-family: Poppins, sans-serif;

    #root {
      height: 100%;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  }
`;
