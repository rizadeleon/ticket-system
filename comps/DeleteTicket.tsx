import {
  Autocomplete,
  Box,
  Stack,
  Button,
  Chip,
  Modal,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import TicketData from "../data/TicketData";

export interface Ticket {
  id: string;
  title: string;
  category: any;
  message: string;
  active: boolean;
  deleted: boolean;
}
export default function DeleteTicket() {
  const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);

  const [ticketInfo, setTicketInfo] = useState<Ticket>({
    id: "",
    title: "",
    category: [],
    message: "",
    active: true,
    deleted: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTicketInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Modal
        open={modalOpenDelete}
        onClose={() => {
          setModalOpenDelete(false);
        }}
        style={{
          display: "flex",
          top: 135,
          justifyContent: "center",
        }}
      >
        <div>
          <Paper variant="outlined">
            <Box
              p={2}
              sx={{
                height: "max-content",
                width: 500,
                borderRadius: 4,
              }}
            >
              <Grid container spacing={1} justifyContent="space-around">
                <Grid item xs={12}>
                  <Typography variant="h5">{ticketInfo.title}</Typography>
                </Grid>

                <Grid item xs={12} pb={2}>
                  <Typography variant="body1">{ticketInfo.message}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      setModalOpenDelete(false);
                    }}
                    variant="outlined"
                  >
                    CLOSE
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      if (ticketInfo.deleted === false) {
                        TicketData.Tickets[Number(ticketInfo.id)].deleted =
                          true;
                      } else {
                        TicketData.Tickets[Number(ticketInfo.id)].deleted =
                          false;
                      }

                      setModalOpenDelete(false);
                    }}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </div>
      </Modal>
      <Modal
        open={modalOpenEdit}
        onClose={() => {
          setModalOpenEdit(false);
        }}
        style={{
          display: "flex",
          top: 135,
          justifyContent: "center",
        }}
      >
        <div>
          <Paper variant="outlined">
            <Box
              p={2}
              sx={{
                height: "max-content",
                width: 500,
                borderRadius: 4,
              }}
            >
              <Grid container spacing={1} justifyContent="space-around">
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold">
                    Edit Ticket
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={TicketData.Category}
                    defaultValue={ticketInfo.category}
                    sx={{ pt: 1, width: 255 }}
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
                </Grid>
                <Grid item xs={12} pb={2}>
                  <TextField
                    id="outlined-multiline-static"
                    name="message"
                    placeholder="Message"
                    multiline
                    rows={4}
                    fullWidth
                    value={ticketInfo.message}
                    onChange={handleChange}
                    sx={{ pt: 1 }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      setModalOpenEdit(false);
                    }}
                    variant="outlined"
                  >
                    CLOSE
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      TicketData.Tickets[Number(ticketInfo.id)] = ticketInfo;

                      setModalOpenEdit(false);
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </div>
      </Modal>
      <Paper elevation={0}>
        <Box p={2} bgcolor="#e8eaf6" borderRadius={1} my={1} mx={15}>
          <Grid container justifyContent="center" my={2}>
            <Grid container xs={12} md={9}>
              <Typography
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize={20}
                pb={3}
                sx={{}}
              >
                Delete Tickets:
              </Typography>
              <Grid
                container
                item
                xs={12}
                bgcolor="white"
                border={2}
                borderRadius={1}
                sx={{
                  borderColor: "#263238",
                }}
              >
                <List>
                  {TicketData.Tickets.map((tickets, index) => (
                    <div key={index}>
                      {tickets.deleted === false && (
                        <div>
                          <Box p={2}>
                            <Grid container>
                              <Grid item xs={12}>
                                <ListItem>
                                  <ListItemButton
                                    onClick={() => {
                                      setModalOpenDelete(true);
                                      setTicketInfo(tickets);
                                    }}
                                  >
                                    <Grid container>
                                      <Grid item xs={5.5}>
                                        <Typography
                                          noWrap
                                          fontSize={50}
                                          fontWeight="bold"
                                        >
                                          {tickets.title}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={5.5}>
                                        <Typography>
                                          {tickets.message}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={5.5}></Grid>
                                      <Grid item xs={5.5}>
                                        <Stack
                                          direction="row"
                                          justifyContent="space-evenly"
                                          alignItems="center"
                                          sx={{ border: 1 }}
                                          divider={
                                            <Divider
                                              orientation="vertical"
                                              flexItem
                                              sx={{ backgroundColor: "black" }}
                                            />
                                          }
                                          spacing={2}
                                        >
                                          {tickets.category}
                                        </Stack>
                                      </Grid>
                                    </Grid>
                                  </ListItemButton>
                                  <Grid item xs={1}>
                                    <Button
                                      onClick={() => {
                                        setModalOpenEdit(true);
                                        setTicketInfo(tickets);
                                      }}
                                    >
                                      Edit
                                    </Button>
                                  </Grid>
                                </ListItem>
                              </Grid>
                            </Grid>
                          </Box>
                        </div>
                      )}
                    </div>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
