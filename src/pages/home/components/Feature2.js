import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

// images
import Abstract1 from "../../../images/abs-1.svg";
import Abstract2 from "../../../images/abs-2.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  featureContainer: {
    height: "80vh",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  appName: {
    height: "5vh",
    color: "#000000",
    fontSize: 28,
    fontWeight: 600,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  featureLongDesc: {
    height: "5vh",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    lineHeight: 2,
    color: theme.palette.text.secondary,
    fontSize: 16,
  },
}));

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Turn every team into a data team"
        tip="Building teams of all skill sets to be data driven, unlocking valuable insights with beautiful and interactive visualizations and dashboards"
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6}>
              <img src={Abstract2} alt="img" width={"90%"} />
              <p className={classes.appName}>
                Zero to dashboard in minutes
              </p>
              <p className={classes.featureLongDesc}>
                Quickly build and share beautiful, customized, and dynamic dashboards that showcase your data with just a few clicks.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img src={Abstract1} alt="img" width={"90%"} />
              <p className={classes.appName}>
                Easily explore data no matter your skill
              </p>
              <p className={classes.featureLongDesc}>
                Easily explore with our no-code viz builder or run deeper analysis using our state-of-the-art SQL editor.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}