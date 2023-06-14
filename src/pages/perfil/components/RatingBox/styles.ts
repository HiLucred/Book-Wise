import { keyframes, styled } from "../../../../../stitches.config";

const triggerCardShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Container = styled("div", {
  animation: `${triggerCardShow} 1s`
});

export const Rating = styled("div", {
  marginTop: '0.5rem',
  marginBottom: '1.5rem',
  backgroundColor: "$gray700",
  padding: "1.5rem",
  maxWidth: "39rem",
  borderRadius: "$md",
});

export const Info = styled("div", {
  display: "flex",
  gap: "1.25rem",
  marginBottom: "1.5rem",
});

export const BookDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  "h2:nth-of-type(2)": {
    flex: 1,
  },
});
