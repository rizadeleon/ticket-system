import { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CreateTicket from "../comps/CreateTicket";
import ViewTicket from "../comps/ViewTicket";
import DeleteTicket from "../comps/DeleteTicket";

export default function Home() {
  const [navOpen, setNavOpen] = useState({
    create: true,
    view: false,
    delete: false,
  });

  return (
    <div>
      <main>
        <Paper elevation={0}>
          <Box p={2} bgcolor="#9fa8da" borderRadius={1} my={1} mx={15}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "23px",
                    mr: 52,
                  }}
                >
                  MT
                </Typography>
              </Grid>
              <Grid container item xs={12} md={5}>
                <Grid item xs={12} md={4}>
                  <Button
                    variant={navOpen.create ? "contained" : undefined}
                    size="medium"
                    color="inherit"
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                    }}
                    onClick={() => {
                      setNavOpen({
                        create: true,
                        view: false,
                        delete: false,
                      });
                    }}
                  >
                    Create
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant={navOpen.view ? "contained" : undefined}
                    size="medium"
                    color="inherit"
                    sx={{ fontFamily: "sans-serif", fontSize: "16px" }}
                    onClick={() => {
                      setNavOpen({
                        create: false,
                        view: true,
                        delete: false,
                      });
                    }}
                  >
                    View
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant={navOpen.delete ? "contained" : undefined}
                    size="medium"
                    color="inherit"
                    sx={{ fontFamily: "sans-serif", fontSize: "16px" }}
                    onClick={() => {
                      setNavOpen({
                        create: false,
                        view: false,
                        delete: true,
                      });
                    }}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container>
              <Grid item xs={12}>
                {navOpen.create && <CreateTicket />}
                {navOpen.view && <ViewTicket />}
                {navOpen.delete && <DeleteTicket />}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </main>
    </div>
  );
}
