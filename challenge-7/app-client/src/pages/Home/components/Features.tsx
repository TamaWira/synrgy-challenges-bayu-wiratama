import {
  Grid,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Features() {
  return (
    <Container>
      <Grid container mt={10}>
        <Grid container xs={6} justifyContent="center" alignItems="center">
          <img
            src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182447/BCR/img_service_m02bed.png"
            alt=""
          />
        </Grid>
        <Grid container xs={6} alignItems="center">
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Best Car Rental for any kind of trip in Bali!
            </Typography>
            <Typography my={1}>
              Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </Typography>
            <List>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Sewa Mobil Dengan Supir di Bali 12 Jam" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Sewa Mobil Lepas Kunci di Bali 24 Jam" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Sewa Mobil Jangka Panjang Bulanan" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Gratis Antar - Jemput Mobil di Bandara" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Layanan Airport Transfer / Drop In Out" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
