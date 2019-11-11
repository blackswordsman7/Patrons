import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core";

export default function CreateGrantPage(props) {
  return (
    <div style={{ marginTop: 18 }}>
      <Grid container direction="row" justify="center">
        <Typography variant="h4">Create a Grant</Typography>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Title of Project"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            multiline
            rows="4"
            label="Description of Project"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Project URL"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Github URL"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Recipient Wallet Address"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            type="text"
            fullWidth
            label="Project Logo Url"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", fontWeight: 600, padding: 8 }}
          >
            Create Grant
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
