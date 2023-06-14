import { keyframes, styled } from "../../../../../stitches.config";

const triggerCardShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Container = styled("aside", {
  marginTop: "4.25rem",
  marginLeft: "4rem",
  marginRight: "4rem",
  animation: `${triggerCardShow} 1s`
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: '1rem',

  a: {
    textDecoration: 'none',

    h2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const Box = styled("div", {
  padding: "1.125rem 1.25rem",
  marginBottom: "0.75rem",

  display: "flex",
  gap: "1.25rem",

  borderRadius: "$md",
  backgroundColor: "$gray700",
});

export const Info = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "space-between",
});

export const Text = styled("div", {});
