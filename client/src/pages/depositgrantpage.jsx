import React from "react";
import GrantCard from "../components/grantcard";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

export default function DepositGrantPage(props) {
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ marginTop: 28, marginLeft: 12, marginRight: 12 }}
      >
        <Grid item xs={6}>
          <Grid container direction="row" justify="center">
            <GrantCard xs={6} parent="deposit"></GrantCard>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={6}>
              <Grid container direction="row" justify="center">
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  Deposit Grant
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography>
                  To show your support to the open source projects
                </Typography>
              </Grid>
              <TextField
                id="outlined-basic"
                type="number"
                fullWidth
                label="Deposit Grant"
                margin="normal"
                variant="outlined"
              />
              <Grid container direction="row" justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontWeight: 600, padding: 8 }}
                >
                  Deposit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
