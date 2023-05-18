import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FormCheckout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ height: "100vh", paddingTop: "1rem", marginTop: "3rem" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={7}>
            <Button
              type="submit"
              style={{
                fontSize: "10px",
                marginTop: "2px",
                gap: 5,
              }}
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
