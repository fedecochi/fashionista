import { Box, Typography, Container } from "@mui/material";

function About() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        About GlamWear
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: "center" }}>
        At GlamWear, we believe fashion is a form of self-expression.
        Our collections blend comfort, elegance, and modern design to help
        you shine in every moment. Founded in 2023, we’ve helped thousands of
        customers elevate their wardrobe with timeless pieces.
      </Typography>
    </Container>
  );
}

export default About;
