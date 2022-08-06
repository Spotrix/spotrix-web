import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

import Ecosystem from "../../../images/guinsoo-ecosystem-spotrix.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(10),
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="More about Spotrix"
          tip="Spotrix ecosystem in GuinsooLab & big data system"
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container className={classes.container}>
              <img src={Ecosystem} alt="ecosystem" width={"100%"} />
              <p>Build powerful visualizations and dashboards on top of popular databases and SQL engines.</p>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}