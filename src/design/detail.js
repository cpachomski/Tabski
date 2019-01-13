import { keyframes } from "styled-components";

const animation = {
  fadeInDown: keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
};

const curves = {
  cubic: "cubic-bezier(0.785, 0.135, 0.15, 0.86)"
};

const durations = {
  short: "0.3s",
  medium: "1s"
};

const delays = {
  short: "0.04s"
};

const fonts = {
  sansSerif: "sans-serif"
};

export const colors = {
  beige: "#f6f6ef",
  black: "#000000",
  gray: "#828282",
  orange: "#ff6600",
  white: "#ffffff"
};

export const themes = {
  light: {
    name: "light",
    animation,
    colors: {
      bkg: colors.white,
      main: colors.black,
      loud: colors.orange,
      quiet: colors.gray
    },
    curves,
    delays,
    durations,
    text: {
      fonts,
      size: {
        small: "1em",
        medium: "1.2em",
        large: "2.3em",
        extraLarge: "5em"
      }
    }
  },
  dark: {
    name: "dark",
    animation,
    colors: {
      bkg: colors.black,
      main: colors.white,
      loud: colors.orange,
      quiet: colors.gray
    },
    curves,
    delays,
    durations,
    text: {
      fonts,
      size: {
        small: "1em",
        medium: "1.2em",
        large: "2.3em",
        extraLarge: "5em"
      }
    }
  }
};
