import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Link,
  Stack,
  AppBar,
  Button,
  Select,
  Toolbar,
  MenuItem,
  Container,
  Typography,
  InputLabel,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const HeroBackground = styled.div`
  background-color: #f1f3ff;
  width: 100%;
  padding-top: 2rem;
  position: relative;
`;

const Brand = styled("div")`
  height: 40px;
  width: 6rem;
  background-color: blue;
`;

export default function Hero() {
  return (
    <>
      <HeroBackground>
        <Container>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Toolbar disableGutters>
              <Link href="/">
                <Brand></Brand>
              </Link>
              <Typography sx={{ flexGrow: 1 }}></Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography color="black">Our Services</Typography>
                <Typography color="black">Why Us</Typography>
                <Typography color="black">Testimonial</Typography>
                <Typography color="black">FAQ</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5CB85F",
                    borderRadius: 0,
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
          <Grid container py={12} justifyContent="center" alignItems="center">
            <Grid item xs={6} py={1}>
              <Box>
                <Typography
                  variant="h4"
                  p={0}
                  m={0}
                  sx={{ fontWeight: "bold" }}
                >
                  Sewa & Rental Mobil Terbaik di kawasan Bali
                </Typography>
                <Typography my={2} variant="subtitle1" pr={10}>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src="https://res.cloudinary.com/dvncokkpe/image/upload/v1694182446/BCR/img_car_qjcjer.png"
                alt=""
                width="50%"
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Box
          p={2}
          borderRadius="5px"
          zIndex={9999}
          position="absolute"
          bottom={-55}
          width="80%"
          left="0"
          right="0"
          marginLeft="auto"
          marginRight="auto"
          bgcolor="white"
          boxShadow={2}
        >
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography variant="body2" mb={1}>
                Tipe Driver
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="driver-select-label">
                  Pilih Tipe Driver
                </InputLabel>
                <Select
                  labelId="driver-select-label"
                  label="Pilih Tipe Driver"
                  MenuProps={{
                    style: { zIndex: 99999 },
                  }}
                >
                  <MenuItem value="driver">Dengan Supir</MenuItem>
                  <MenuItem value="none">Tanpa Supir (Lepas Kunci)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" mb={1}>
                Tanggal
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label="Pilih Tanggal" />
              </LocalizationProvider>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" mb={1}>
                Waktu Jemput/Ambil
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker label="Pilih Waktu" />
              </LocalizationProvider>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" mb={1}>
                Jumlah Penumpang (Optional)
              </Typography>
              <FormControl>
                <InputLabel htmlFor="jumlah-penumpang-field">
                  Jumlah Penumpang
                </InputLabel>
                <OutlinedInput
                  id="jumlah-penumpang-field"
                  type="tel"
                  label="Jumlah Penumpang"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <PeopleAltIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </HeroBackground>
    </>
  );
}
