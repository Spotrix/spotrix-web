import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

// images
import Abstract from "../../../images/img_3.png";

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
  },
  featureLongDesc: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    fontSize: 20,
  },
}));

export default function FeatureY() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Why Spotrix?"
        tip="Unleash the power of BI + AI with out practices"
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6}>
              <p className={classes.featureLongDesc}>
                Spotrix brings in cognitive capabilities, analytical power, and intelligent non-intrusive automation applications to business enterprises. These technologies work together to leverage big data and power the Intelligent Enterprise.
              </p>
              <p className={classes.featureLongDesc}>
                These competencies require different tools, technologies and skills, so they have been organised into four distinct practices.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img src={Abstract} alt="img" width={"80%"} style={{ borderRadius: 16}} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}