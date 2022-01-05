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
import TicketData from "../data/TicketData";
import { ChangeEvent, useState } from "react";

export interface Tickets {
  id: string;
  title: string;
  category: any;
  message: string;
  active: boolean;
  deleted: boolean;
}

export default function CreateTicketForm() {
  const currentId = TicketData.Tickets.length;
  const [ticketInfo, setTicketInfo] = useState<Tickets>({
    id: String(currentId),
    title: "",
    category: [],
    message: "",
    active: true,
    deleted: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Box>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            md={2.7}
            mt={5}
            mb={2}
            p={2}
            bgcolor="white"
            border={2}
            borderRadius={3}
            borderColor="#263238"
            textAlign="center"
          >
            <Typography
              fontFamily="sans-serif"
              mt={3}
              fontWeight="bold"
              fontSize={30}
              textAlign="center"
            >
              New Ticket
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Ticket Title"
              variant="outlined"
              color="info"
              size="small"
              name="title"
              value={ticketInfo.title}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <Autocomplete
              fullWidth
              sx={{ mt: 2 }}
              multiple
              id="tags-standard"
              options={TicketData.Category}
              onChange={(event, newValue) => {
                setTicketInfo({
                  id: ticketInfo.id,
                  title: ticketInfo.title,
                  category: newValue,
                  message: ticketInfo.message,
                  active: ticketInfo.active,
                  deleted: ticketInfo.deleted,
                });
              }}
              renderInput={(params) => (
                <TextField
                  name="category"
                  {...params}
                  id="outlined-multiline-static"
                  multiline
                  value={TicketData.Category}
                />
              )}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              id="outlined-multiline-static"
              name="message"
              placeholder="Message"
              multiline
              rows={4}
              value={ticketInfo.message}
              onChange={handleChange}
            />

            <Button
              sx={{ mt: 2 }}
              variant="contained"
              fullWidth
              onClick={() => {
                TicketData.Tickets.push(ticketInfo);
                setTicketInfo({
                  id: String(currentId),
                  title: "",
                  category: "",
                  message: "",
                  active: true,
                  deleted: false,
                });
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
