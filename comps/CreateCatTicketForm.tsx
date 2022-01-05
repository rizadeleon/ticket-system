import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import TicketData from "../data/TicketData";

export default function CreateCatTicketFormv2() {
  const [ticketCatValue, setTicketCatValue] = useState("");
  return (
    <div>
      <Box>
        <Grid container justifyContent="space-evenly">
          <Grid
            item
            xs={10}
            md={3}
            mt={2}
            p={2}
            bgcolor="white"
            border={2}
            borderRadius={3}
            sx={{
              borderColor: "#263238",
            }}
          >
            <Typography
              fontFamily="sans-serif"
              mt={3}
              fontWeight="bold"
              fontSize={30}
              justifyContent="center"
              textAlign="center"
            >
              New Category
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Ticket Title"
              variant="outlined"
              value={ticketCatValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTicketCatValue(e.target.value);
              }}
              size="small"
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                setTicketCatValue("");
                TicketData.Category.push(ticketCatValue);
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid
            item
            xs={10}
            md={3}
            mt={2}
            p={2}
            bgcolor="white"
            border={2}
            borderRadius={3}
            sx={{
              borderColor: "#263238",
            }}
          >
            <Typography
              noWrap
              sx={{
                fontFamily: "sans-serif",
                mt: 3,
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "left",
              }}
            >
              Categories
            </Typography>

            <Autocomplete
              multiple
              id="tags-standard"
              options={TicketData.Category}
              sx={{ p: 2 }}
              defaultValue={TicketData.Category}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="outlined-multiline-static"
                  multiline
                  value={TicketData.Category}
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
