import React from "react";
import GrantCard from "../components/grantcard";
import { Grid } from "@material-ui/core";

export default function GrantPage(props) {
  return (
    <div>
      <Grid
        container
        spacing={3}
        style={{ marginTop: 28, marginLeft: 12, marginRight: 12 }}
      >
        <GrantCard xs={3} parent="show"></GrantCard>
      </Grid>
    </div>
  );
}
