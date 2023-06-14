import { styled } from "../../../../../stitches.config";

export const Container = styled("div", {});

export const PageTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: '2.5rem'
});

export const SearchBar = styled("form", {
  width: "100%",
  padding: "1rem",
  marginBottom: '2rem',

  border: "1px solid $gray500",
  borderRadius: "$sm",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  input: {
    width: "100%",
    height: "100%",
    background: "transparent",
    outline: "none",
    border: "none",
    color: "$gray100",
  },

  button: {
    background: "transparent",
    opacity: 0,
  },
});
