import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "45vh",
    backgroundColor: "white",
    backgroundImage: 'url(' + require('../../images/bg-secondary.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  },
  title: {
    fontSize: 38,
    fontWeight: 800,
    marginBottom: theme.spacing(10),
  },
  body: {
    fontSize: 16,
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    fontSize: 16,
    weight: 600,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textTransform: "Capitalize",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      weight: 800,
    }
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems={"center"} justify={"center"} className={classes.root}>
        <Grid item xs={3} />
        <Grid item xs={5}>
          <p className={classes.title}>Get started for free today</p>
          <i className={classes.body}>Insights for all, whatever your role.</i>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.button} onClick={() => window.open("https://github.com/Spotrix", "_target")}>
            Get Started
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}