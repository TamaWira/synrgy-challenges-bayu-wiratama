import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Brand = styled("div")`
  height: 40px;
  width: 6rem;
  background-color: blue;
`;

export default function Footer() {
  return (
    <Container>
      <Grid container my={10}>
        <Grid container xs={3}>
          <Typography>
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </Typography>
          <Typography my={3}>binarcarrental@gmail.com</Typography>
          <Typography>081-233-334-808</Typography>
        </Grid>
        <Grid container xs={3} justifyContent="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Our Services</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Why Us</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Testimonial</Typography>
            <Typography sx={{ fontWeight: "bold" }}>FAQ</Typography>
          </Box>
        </Grid>
        <Grid container xs={3}>
          <Box display="flex" flexDirection="column" width="70%">
            <Typography>Connect with us</Typography>
            <Box
              mt={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_facebook_rnhtr2.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_instagram_jgytyv.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_twitter_pviufy.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_mail_cs8dtw.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_twitch_iwyiv7.png"
                alt=""
              />
            </Box>
          </Box>
        </Grid>
        <Grid container xs={3}>
          <Box display="flex" flexDirection="column" width="70%">
            <Typography mb={1}>Copyright Binar 2022</Typography>
            <Brand />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
