import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

import Gallery from "../../../images/gallery.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(10),
    backgroundColor: "#ffffff",
  },
  container: {
    marginTop: "7vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Feature4() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="Spotrix Charts Gallery"
          tip="Rich Visualizations, choose from a wide array of beautiful viz types (40+)"
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container className={classes.container}>
              <img src={Gallery} alt="ecosystem" width={"100%"} />
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}