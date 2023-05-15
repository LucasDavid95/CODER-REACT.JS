import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FormCheckout = () => {
  return (
    <div style={{ height: "100vh", paddingTop: "1rem" }}>
      <form action="">
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{ fontSize: "10px", marginTop: "5px" }}
              variant="contained"
            >
              <h3 style={{ color: "white" }}>Buy</h3>
              <CheckCircleIcon style={{ color: "white" }} />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
