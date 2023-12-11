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

import { ICars } from "../CarTypes";

import useAction from "../CarHooks";

export default function CarList() {
  const cars = useAction();

  const renderCars = () => {
    return cars?.map((car: ICars) => (
      <Grid container xs={4} p={1}>
        <Box width="100%" height="100%">
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent sx={{ height: "100%", position: "relative" }}>
              <Box display="flex" justifyContent="center" my={2}>
                <img src={car.image} alt="" width="100%" />
              </Box>
              <Typography>{car.model}</Typography>
              <Typography my={1} sx={{ fontWeight: "bold" }} variant="h6">
                Rp {car.rentPerDay} / hari
              </Typography>
              <Typography>{car.description}</Typography>
              <Stack direction="row" mt={2}>
                <PeopleAltOutlinedIcon />
                <Typography ml={2}>{car.capacity} Orang</Typography>
              </Stack>
              <Stack direction="row" mt={2}>
                <SettingsOutlinedIcon />
                <Typography ml={2}>{car.transmission}</Typography>
              </Stack>
              <Stack direction="row" mt={2} mb={5}>
                <DateRangeOutlinedIcon />
                <Typography ml={2}>Tahun {car.year}</Typography>
              </Stack>
              <Box
                mt={3}
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 0,
                  right: 0,
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
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
    ));
  };

  return (
    <Container
      sx={{
        width: "85%",
      }}
    >
      <Grid container spacing={2} mt={15}>
        {renderCars()}
      </Grid>
    </Container>
  );
}
