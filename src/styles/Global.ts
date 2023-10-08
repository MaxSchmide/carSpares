import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import { device } from './BreakPoints';

export const GlobalStyles = createGlobalStyle`

:root {
  --grid-cols: 24;

  @media ${device.tablet} {
    --grid-cols: 12;
  }
  @media ${device.mobile} {
    --grid-cols: 6;
  }
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Mont", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  @media ${device.tablet} {
    font-size: 50%;
  }

  @media ${device.mobile} {
    font-size: 100%;
  }
}

body {
  margin: 0;
  padding: 0;
  background-color: #F8F8F8;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

li {
  list-style-type: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.fixed {
  position: sticky;
  top: 0;
  z-index: 100;
}

.hidden {
  overflow: hidden;
}

.icon {
  color: ${theme.colors.primary};
  font-size: 3.2rem;
  cursor: pointer;
  transition: color .2s ease-in-out;

  @media ${device.mobile} {
    font-size: 1.6rem
  }
}

.icon:hover {
  color: ${theme.colors.secondary};
  transform: scale(1.05);
}

.nav-icon {
  position: relative;
}

.nav-icon::after {
  display: inline-block;
  content: attr(data-count);
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${theme.colors.secondary};
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 0.6rem;
  border-radius: 999px;
  @media ${device.tablet} {
    top: -6px;
    right: -6px;
  }
  @media ${device.mobile} {
    top: -5px;
    right: -5px;
    font-size: 0.8rem;
    padding: 0 0.3rem;
  }
}

.category-link{
  text-decoration: none;
  color: inherit;
}

.menu-icon {
  transition: transform .2s ease-in-out;
}

.product-button {
  @media ${device.mobile} {
    font-size: 1.2rem;
      width: 100%;
  }
}
`;

export const PageContainer = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
`;
