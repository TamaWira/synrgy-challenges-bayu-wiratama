import { Typography, Box, Grid, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Testimonial() {
  const items = [
    {
      imgUrl:
        "https://res.cloudinary.com/dvncokkpe/image/upload/v1694182446/BCR/img_photo_dzyer0.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti soluta iusto nisi consequatur iure. Dicta aspernatur, a odio eveniet repudiandae eligendi natus labore magnam eum quia vero sint soluta!",
      user: "Jone Doe",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvncokkpe/image/upload/v1702185705/BCR/img_photo_way51b.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti soluta iusto nisi consequatur iure. Dicta aspernatur, a odio eveniet repudiandae eligendi natus labore magnam eum quia vero sint soluta!",
      user: "Mary Jane",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dvncokkpe/image/upload/v1694182446/BCR/img_photo_dzyer0.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti soluta iusto nisi consequatur iure. Dicta aspernatur, a odio eveniet repudiandae eligendi natus labore magnam eum quia vero sint soluta!",
      user: "Jone Doe",
    },
  ];

  return (
    <Container>
      <Box mt={10} mb={4}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
          align="center"
          gutterBottom
        >
          Testimonial
        </Typography>
        <Typography align="center">
          Berbagai review positif dari para pelanggan kami
        </Typography>
      </Box>
      <Carousel>
        {items.map((item) => (
          <Box
            p={3}
            mx={10}
            sx={{
              backgroundColor: "#F1F3FF",
              borderRadius: "1rem",
            }}
          >
            <Grid container>
              <Grid
                container
                xs={4}
                alignItems="center"
                justifyContent="center"
              >
                <img src={item.imgUrl} alt="" />
              </Grid>
              <Grid container xs={8} p={3}>
                <img
                  src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182446/BCR/Rate_plxzmw.png"
                  alt=""
                />
                <Typography py={3}>{item.description}</Typography>
                <Typography sx={{ fontWeight: "bold" }}>{item.user}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}
