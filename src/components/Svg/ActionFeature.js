import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: theme.spacing(15),
  },
  title: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: 600,
    marginBottom: theme.spacing(3),
  },
  buttonDownload: {
    backgroundColor: "#ffffff",
    borderColor: theme.palette.primary.main,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    borderRadius: 30,
    fontSize: 18,
    textTransform: "Capitalize",
    color: theme.palette.primary.main,
    "&:hover" :{
      backgroundColor: "#ffffff",
      fontWeight: 600,
    }
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <p className={classes.title}>Let’s get visual. Try Spotrix today.</p>
          <Button
            variant={"outlined"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://github.com/Spotrix/spotrix/releases", "_target")}
          >
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}