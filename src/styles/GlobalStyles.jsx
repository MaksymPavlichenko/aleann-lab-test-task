import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    margin: 0;

    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    color: #111111;

    background-color: #fdf7f2;

    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;

    /* @media screen and (min-width: 1280px) {
      cursor: pointer;
    } */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: font-family: source-code-pro, Proxima Nova Rg, Roboto, serif;
  }
`;
