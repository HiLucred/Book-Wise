import { styled } from '../../../../../stitches.config'

export const Container = styled("button", {
  width: "23.25rem",
  marginBottom: "$4",
  cursor: "pointer",
  backgroundColor: "$gray600",
  padding: "$5 $6",
  border: "none",
  borderRadius: 8,
  fontSize: "$lg",
  fontWeight: "$bold",
  color: "$gray200",
  display: "flex",
  alignItems: "center",
  gap: "$5",

  '&:hover': {
    opacity: 0.9
  }
});