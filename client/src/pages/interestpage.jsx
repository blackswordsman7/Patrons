import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core";

export default function InterestPage(props) {
  return (
    <div style={{ marginTop: 50 }}>
      <Grid container direction="row" justify="center">
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Lookup interest
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        <Typography>Find out if an address has accrued any interest</Typography>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 18 }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Beneficiary"
            margin="normal"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography color="textSecondary" style={{ fontWeight: 600 }}>
                    0x43jfd...sd3
                  </Typography>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        style={{ marginTop: 18 }}
      >
        <Button variant="outlined" color="primary" disabled>
          Lookup Interest
        </Button>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        style={{ marginTop: 18 }}
      >
        <Typography variant="body2" gutterBottom>
          rDAI is transferred to the beneficiary address
        </Typography>
      </Grid>

      <Grid container direction="row" justify="center">
        <Typography variant="body2" gutterBottom>
          Anyone can execute the withdrawal for you
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        <Button
          variant="contained"
          color="primary"
          disabled
          startIcon={
            <img
              src="https://app.rdai.money/img/rdai.9f115a4d.svg"
              style={{ height: 20, width: 20 }}
              alt="rdai icon"
            />
          }
        >
          Withdraw Interest
        </Button>
      </Grid>
    </div>
  );
}
