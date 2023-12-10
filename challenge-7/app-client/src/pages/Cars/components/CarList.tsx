import {
  Grid,
  Box,
  Card,
  Stack,
  Button,
  Container,
  Typography,
  CardContent,
} from "@mui/material";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAlt";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export default function CarList() {
  return (
    <Container
      sx={{
        width: "85%",
      }}
    >
      <Grid container spacing={2} mt={15}>
        <Grid container xs={4} p={1}>
          <Box width="100%">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="center" my={2}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1698069423/BCR/image_1_zmamh2.png"
                    alt=""
                  />
                </Box>
                <Typography>Avanza</Typography>
                <Typography my={1} sx={{ fontWeight: "bold" }} variant="h6">
                  Rp 430.000 / hari
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, accusantium iure itaque nam quidem dolor quasi
                  consectetur maiores quibusdam magni adipisci optio. Eos
                  corporis ipsum impedit nesciunt esse quibusdam est?
                </Typography>
                <Stack direction="row" mt={2}>
                  <PeopleAltOutlinedIcon />
                  <Typography ml={2}>4 Orang</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <SettingsOutlinedIcon />
                  <Typography ml={2}>Manual</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <DateRangeOutlinedIcon />
                  <Typography ml={2}>Tahun 2020</Typography>
                </Stack>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5CB85F",
                      borderRadius: 0,
                      width: "100%",
                    }}
                  >
                    Pilih Mobil
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid container xs={4} p={1}>
          <Box width="100%">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="center" my={2}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1698069423/BCR/image_1_zmamh2.png"
                    alt=""
                  />
                </Box>
                <Typography>Avanza</Typography>
                <Typography my={1} sx={{ fontWeight: "bold" }} variant="h6">
                  Rp 430.000 / hari
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, accusantium iure itaque nam quidem dolor quasi
                  consectetur maiores quibusdam magni adipisci optio. Eos
                  corporis ipsum impedit nesciunt esse quibusdam est?
                </Typography>
                <Stack direction="row" mt={2}>
                  <PeopleAltOutlinedIcon />
                  <Typography ml={2}>4 Orang</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <SettingsOutlinedIcon />
                  <Typography ml={2}>Manual</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <DateRangeOutlinedIcon />
                  <Typography ml={2}>Tahun 2020</Typography>
                </Stack>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5CB85F",
                      borderRadius: 0,
                      width: "100%",
                    }}
                  >
                    Pilih Mobil
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid container xs={4} p={1}>
          <Box width="100%">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="center" my={2}>
                  <img
                    src="https://res.cloudinary.com/dvncokkpe/image/upload/v1698069423/BCR/image_1_zmamh2.png"
                    alt=""
                  />
                </Box>
                <Typography>Avanza</Typography>
                <Typography my={1} sx={{ fontWeight: "bold" }} variant="h6">
                  Rp 430.000 / hari
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum, accusantium iure itaque nam quidem dolor quasi
                  consectetur maiores quibusdam magni adipisci optio. Eos
                  corporis ipsum impedit nesciunt esse quibusdam est?
                </Typography>
                <Stack direction="row" mt={2}>
                  <PeopleAltOutlinedIcon />
                  <Typography ml={2}>4 Orang</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <SettingsOutlinedIcon />
                  <Typography ml={2}>Manual</Typography>
                </Stack>
                <Stack direction="row" mt={2}>
                  <DateRangeOutlinedIcon />
                  <Typography ml={2}>Tahun 2020</Typography>
                </Stack>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5CB85F",
                      borderRadius: 0,
                      width: "100%",
                    }}
                  >
                    Pilih Mobil
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
