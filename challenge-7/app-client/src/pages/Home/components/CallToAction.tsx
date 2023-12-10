import { Box, Typography, Button, Container, Link } from "@mui/material";

export default function CallToAction() {
  return (
    <Container>
      <Box
        mt={10}
        p={10}
        py={7}
        sx={{ backgroundColor: "blue", borderRadius: "10px" }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "white" }}
          align="center"
        >
          Sewa Mobil di Bali Sekarang
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          align="center"
          my={3}
          mx={20}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          inventore aliquam in exercitationem, qui, magni voluptatum eligendi
          corrupti ad sed perferendis rem explicabo dolores necessitatibus,
          dolorem debitis nemo at sint!
        </Typography>
        <Box textAlign="center" mt={6}>
          <Link href="/Cars">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5CB85F",
                borderRadius: "2px",
              }}
            >
              Mulai Sewa Mobil
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
