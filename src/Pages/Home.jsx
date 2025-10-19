import { Box, Typography, Button, Grid } from "@mui/material";
import banner from "../assets/banner.jpg";
import fashion1 from "../assets/fashion1.jpg";
import fashion2 from "../assets/fashion2.jpg";
import fashion3 from "../assets/fashion3.jpg";

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${fashion1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold">
            Discover Your Style
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Trendy fashion for every season
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, backgroundColor: "#111" }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Collection Section */}
      <Box sx={{ py: 5, px: 3 }}>
        <Typography variant="h4" textAlign="center" mb={4}>
          Featured Collections
        </Typography>
        <Grid container spacing={3}>
          {[fashion2, fashion3, fashion1].map((img, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box
                component="img"
                src={img}
                alt="fashion"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;