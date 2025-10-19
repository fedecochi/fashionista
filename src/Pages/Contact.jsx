import { Box, Container, Typography, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" mb={4}>
        Have a question or want to collaborate? We’d love to hear from you!
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" fullWidth required />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" sx={{ backgroundColor: "#111" }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;