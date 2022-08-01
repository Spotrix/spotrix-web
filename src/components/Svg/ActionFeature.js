import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "45vh",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'url(' + require('../../images/cta-graph-repeating.png') + ')',
    backgroundSize: "1300px auto,auto",
    backgroundPosition: "50% 100%",
    backgroundRepeat: "repeat-x,repeat",
    color: "white",
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.root} />
      </Grid>
    </div>
  );
}