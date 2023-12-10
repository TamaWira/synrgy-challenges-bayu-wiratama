import {
  Container,
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <Container>
      <Grid container my={10}>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Frequently Asked Question
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: "100%" }}>
            <Accordion>
              <AccordionSummary
                id="panel1-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Apa saja syarat yang dibutuhkan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto explicabo unde quia voluptates fuga ut
                  impedit est repudiandae suscipit incidunt, deleniti provident
                  tenetur doloribus consectetur praesentium a libero dicta!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                id="panel2-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto explicabo unde quia voluptates fuga ut
                  impedit est repudiandae suscipit incidunt, deleniti provident
                  tenetur doloribus consectetur praesentium a libero dicta!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                id="panel3-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto explicabo unde quia voluptates fuga ut
                  impedit est repudiandae suscipit incidunt, deleniti provident
                  tenetur doloribus consectetur praesentium a libero dicta!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                id="panel4-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Apakah Ada biaya antar-jemput?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto explicabo unde quia voluptates fuga ut
                  impedit est repudiandae suscipit incidunt, deleniti provident
                  tenetur doloribus consectetur praesentium a libero dicta!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                id="panel5-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Bagaimana jika terjadi kecelakaan</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto explicabo unde quia voluptates fuga ut
                  impedit est repudiandae suscipit incidunt, deleniti provident
                  tenetur doloribus consectetur praesentium a libero dicta!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
