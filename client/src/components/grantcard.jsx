import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import GitHubIcon from "@material-ui/icons/GitHub";

function GrantCard(props) {
  return (
    <Grid item xs={props.xs}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://pbs.twimg.com/profile_banners/1181817767508369408/1572916965/1500x500"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginBottom: 20 }}
            >
              Marketing DAO
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Growing Ethereum as a brand. Doing it the Ethereum way.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              https://marketingdao.org/
            </Typography>
            <div style={{ marginTop: 20 }}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                display="inline"
              >
                by
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                display="inline"
                style={{ marginLeft: 12, fontSize: 16 }}
              >
                0xSjdkwu...dwdw
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container alignItems="center" style={{ marginLeft: 8 }}>
            <PanoramaFishEyeIcon
              fontSize="small"
              style={{ height: 16, width: 16, color: "#5cb85c" }}
            ></PanoramaFishEyeIcon>{" "}
            <Typography size="small" style={{ marginLeft: 8 }}>
              Active
            </Typography>
          </Grid>
          <IconButton aria-label="add to favorites">
            <GitHubIcon />
          </IconButton>
          {props.parent === "show" ? (
            <Button
              variant="contained"
              size="small"
              color="primary"
              style={{ marginLeft: "auto", width: 350 }}
            >
              Fund this Grant
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default GrantCard;
