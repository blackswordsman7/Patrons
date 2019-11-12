import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core";
import Web3Service from "../services/web3";

export default function CreateGrantPage(props) {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [url, setUrl] = useState();
  const [github, setGithub] = useState();
  const [address, setAddress] = useState();
  const [logo, setLogo] = useState();
  createGrant = async () => {
    let grantId = await Web3Service.createGrant(
      title,
      desc,
      url,
      logo,
      github,
      [props.address],
      [100],
      props.contract
    );
    console.log(grantId);
  };
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
            value={title}
            onChange={e => setTitle(e.target.value)}
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
            value={desc}
            onChange={e => setDesc(e.target.value)}
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
            value={url}
            onChange={e => setUrl(e.target.value)}
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
            value={github}
            onChange={e => setGithub(e.target.value)}
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
            value={props.address}
            onChange={e => setAddress(e.target.value)}
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
            value={logo}
            onChange={e => setLogo(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", fontWeight: 600, padding: 8 }}
            onClick={createGrant}
          >
            Create Grant
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
