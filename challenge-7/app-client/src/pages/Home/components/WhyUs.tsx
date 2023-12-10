import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function WhyUs() {
  return (
    <Container>
      <Box mt={10}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Why Us?
        </Typography>
        <Typography>Mengapa harus pilih Binar Car Rental?</Typography>
        <Grid container mt={1} spacing={2}>
          <Grid item xs={3}>
            <Box>
              <Card variant="outlined">
                <CardContent sx={{ padding: "2rem" }}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_complete_zpmijp.png"
                    alt=""
                  />
                  <Typography variant="h5" my={1} sx={{ fontWeight: "bold" }}>
                    Mobil Lengkap
                  </Typography>
                  <Typography variant="subtitle2">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Card variant="outlined">
                <CardContent sx={{ padding: "2rem" }}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_price_wu6lg9.png"
                    alt=""
                  />
                  <Typography variant="h5" my={1} sx={{ fontWeight: "bold" }}>
                    Harga Murah
                  </Typography>
                  <Typography variant="subtitle2">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Card variant="outlined">
                <CardContent sx={{ padding: "2rem" }}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_24hrs_bwkgzl.png"
                    alt=""
                  />
                  <Typography variant="h5" my={1} sx={{ fontWeight: "bold" }}>
                    Layanan 24 Jam
                  </Typography>
                  <Typography variant="subtitle2">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Card variant="outlined">
                <CardContent sx={{ padding: "2rem" }}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182445/BCR/icon_professional_z8xwuc.png"
                    alt=""
                  />
                  <Typography variant="h5" my={1} sx={{ fontWeight: "bold" }}>
                    Supir Profesional
                  </Typography>
                  <Typography variant="subtitle2">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
