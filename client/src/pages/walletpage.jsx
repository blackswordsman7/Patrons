import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  Divider,
  Paper
} from "@material-ui/core";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

export default function WalletPage(props) {
  return (
    <div style={{ marginTop: 50 }}>
      <div>
        <Paper style={{ marginLeft: "4%", marginRight: "4%", padding: 20 }}>
          <Typography variant="h5" component="h3">
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon> Wallet
          </Typography>
          <Grid container direction="row" alignItems="center">
            <Typography component="p">
              You have generated a total of{" "}
              <strong style={{ fontSize: 24 }}>100</strong>{" "}
            </Typography>
            <img
              src="https://app.rdai.money/img/rdai.9f115a4d.svg"
              style={{ height: 28, width: 28, marginLeft: 8 }}
              alt="dai icon"
            />
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Typography component="p">
              From that total, <strong style={{ fontSize: 24 }}>1000</strong>
            </Typography>
            <img
              src="https://app.rdai.money/img/dai.bb706707.svg"
              style={{ height: 28, width: 28, marginLeft: 8, marginRight: 8 }}
              alt="dai icon"
            />
            <Typography component="p">is unallocated.</Typography>
          </Grid>
        </Paper>
      </div>
      <Divider variant="middle" style={{ marginTop: 24, marginBottom: 24 }} />
      <div>
        <Grid container direction="row" justify="center">
          <Typography>
            <strong>Generate rDAI from DAI</strong>
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center">
          <Typography>Deposit Dai and start generating interest</Typography>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 28 }}>
          <Grid item xs style={{ paddingLeft: "4%" }}>
            <TextField
              id="outlined-basic"
              type="number"
              value={0}
              fullWidth
              label="Deposit Dai"
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="https://app.rdai.money/img/dai.bb706707.svg"
                      style={{ height: 28, width: 28 }}
                      alt="rdai icon"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <SyncAltIcon fontSize="large" color="disabled" />
            </Grid>
          </Grid>
          <Grid item xs style={{ paddingRight: "4%" }}>
            <TextField
              id="outlined-basic"
              type="number"
              value={0}
              fullWidth
              label="recieve rDai"
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="https://app.rdai.money/img/rdai.9f115a4d.svg"
                      style={{ height: 28, width: 28 }}
                      alt="dai icon"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ marginTop: 24 }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled
            startIcon={
              <img
                src="https://app.rdai.money/img/rdai.9f115a4d.svg"
                style={{ height: 20, width: 20 }}
                alt="dai icon"
              />
            }
          >
            Generate rDai
          </Button>
        </Grid>
      </div>
      <Divider variant="middle" style={{ marginTop: 24, marginBottom: 24 }} />
      <div style={{ marginBottom: 24 }}>
        <Grid container direction="row" justify="center">
          <Typography>
            <strong>Exchange your rDAI back to DAI</strong>
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center">
          <Typography>
            Withdrawn rDAI will immediately stop accruing interest
          </Typography>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 28 }}>
          <Grid item xs style={{ paddingLeft: "4%" }}>
            <TextField
              id="outlined-basic"
              type="number"
              value={0}
              fullWidth
              label="Redeem rDai"
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="https://app.rdai.money/img/rdai.9f115a4d.svg"
                      style={{ height: 28, width: 28 }}
                      alt="rdai icon"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <SyncAltIcon fontSize="large" color="disabled" />
            </Grid>
          </Grid>
          <Grid item xs style={{ paddingRight: "4%" }}>
            <TextField
              id="outlined-basic"
              type="number"
              value={0}
              fullWidth
              label="recieve Dai"
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="https://app.rdai.money/img/dai.bb706707.svg"
                      style={{ height: 28, width: 28 }}
                      alt="dai icon"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ marginTop: 24 }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled
            startIcon={
              <img
                src="https://app.rdai.money/img/dai.bb706707.svg"
                style={{ height: 20, width: 20 }}
                alt="dai icon"
              />
            }
          >
            Redeem rDai
          </Button>
        </Grid>
      </div>
    </div>
  );
}
