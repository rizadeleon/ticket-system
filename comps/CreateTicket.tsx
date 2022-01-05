import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import CreateCatTicketForm from "./CreateCatTicketForm";
import CreateTicketForm from "./CreateTicketForm";

export default function CreateTicketV2() {
  const [openCreate, setOpenCreate] = useState({
    createTickett: true,
    createCatTicket: false,
  });

  return (
    <div>
      <Paper elevation={0}>
        <Box p={2} bgcolor="#e8eaf6" borderRadius={1} marginY={1} marginX={15}>
          <Box>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={2}>
                <Button
                  variant={openCreate.createTickett ? "outlined" : undefined}
                  sx={{
                    textAlign: "center",
                    mx: 2,
                    fontFamily: "sans-serif",
                    color: "black",
                    fontSize: "1.2rem",
                  }}
                  onClick={() =>
                    setOpenCreate({
                      createTickett: true,
                      createCatTicket: false,
                    })
                  }
                >
                  Create ticket
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  variant={openCreate.createCatTicket ? "outlined" : undefined}
                  sx={{
                    textAlign: "center",
                    mx: 2,
                    fontFamily: "sans-serif",
                    color: "black",
                    fontSize: "1.2rem",
                  }}
                  onClick={() =>
                    setOpenCreate({
                      createTickett: false,
                      createCatTicket: true,
                    })
                  }
                >
                  Create Category ticket
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container>
              <Grid item xs={12}>
                {openCreate.createTickett && <CreateTicketForm />}
                {openCreate.createCatTicket && <CreateCatTicketForm />}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
