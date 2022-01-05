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

import { useState } from "react";
import TicketData from "../data/TicketData";

export interface Ticket {
  id: string;
  title: string;
  category: any;
  message: string;
  active: boolean;
  deleted: boolean;
}

export default function ViewTicket() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const [ticketInfo, setTicketInfo] = useState<Ticket>({
    id: "",
    title: "",
    category: [],
    message: "",
    active: true,
    deleted: false,
  });

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
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
                <Grid item xs={12}>
                  <Typography variant="subtitle2">
                    {ticketInfo.category}
                  </Typography>
                </Grid>
                <Grid item xs={12} pb={2}>
                  <Typography variant="body1">{ticketInfo.message}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    variant="outlined"
                  >
                    CLOSE
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      if (ticketInfo.active === true) {
                        TicketData.Tickets[Number(ticketInfo.id)].active =
                          false;
                      } else {
                        TicketData.Tickets[Number(ticketInfo.id)].active = true;
                      }

                      setModalOpen(false);
                    }}
                    variant="contained"
                  >
                    {ticketInfo.active ? "Finished" : "Active"}
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
            <Grid item xs={12} md={9}>
              <Typography
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize={20}
                pb={3}
              >
                Active Tickets:
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
                  {TicketData.Tickets.map((tickets, key) => (
                    <div key={key}>
                      {tickets.active === true && tickets.deleted === false && (
                        <div>
                          <Box p={2}>
                            <Grid container>
                              <Grid item xs={12}>
                                <ListItem>
                                  <ListItemButton
                                    onClick={() => {
                                      setModalOpen(true);
                                      setTicketInfo(tickets);
                                    }}
                                  >
                                    <Grid container>
                                      <Grid item xs={6}>
                                        <Typography
                                          noWrap
                                          fontSize={50}
                                          fontWeight="bold"
                                        >
                                          {tickets.title}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={6}>
                                        <Typography>
                                          {tickets.message}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={6}></Grid>
                                      <Grid item xs={6}>
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
                                            ></Divider>
                                          }
                                          spacing={2}
                                        >
                                          {tickets.category}
                                        </Stack>
                                      </Grid>
                                    </Grid>
                                  </ListItemButton>
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
            <Grid item xs={12} md={9} mt={2}>
              <Typography
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize={20}
                pb={3}
              >
                Finished Tickets:
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
                  {TicketData.Tickets.map((tickets, key) => (
                    <div key={key}>
                      {tickets.active === false && tickets.deleted === false && (
                        <div>
                          <Box p={2}>
                            <Grid container>
                              <Grid item xs={12}>
                                <ListItem>
                                  <ListItemButton
                                    onClick={() => {
                                      setModalOpen(true);
                                      setTicketInfo(tickets);
                                    }}
                                  >
                                    <Grid container>
                                      <Grid item xs={6}>
                                        <Typography
                                          noWrap
                                          fontSize={50}
                                          fontWeight="bold"
                                        >
                                          {tickets.title}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={6}>
                                        <Typography>
                                          {tickets.message}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={6}></Grid>
                                      <Grid item xs={6}>
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
                                            ></Divider>
                                          }
                                          spacing={2}
                                        >
                                          {tickets.category}
                                        </Stack>
                                      </Grid>
                                    </Grid>
                                  </ListItemButton>
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
