import { css, Global } from "@emotion/react";
import theme from "./theme";

export const GlobalStyles = (
  <Global
    styles={css`
      /* @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;900&display=swap"); */
      html,
      body {
        width: 100%;
        padding: 0;
        margin: 0;
        background: ${theme.BackgroundSite};
        color: ${theme.BackgroundStrong};
      }

      * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a,
      a:visited {
        text-decoration: none;
      }
      a:active {
        opacity: 0.5;
      }
      a:hover {
        text-decoration: underline;
      }
    `}
  />
);
