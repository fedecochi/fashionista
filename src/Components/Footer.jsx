import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} GlamWear. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;