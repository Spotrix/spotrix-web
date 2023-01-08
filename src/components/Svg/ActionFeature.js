import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "45vh",
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: theme.spacing(10),
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: 40,
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  titleSpan: {
    fontWeight: 800,
  },
  desc: {
    color: theme.palette.text.primary,
    fontSize: 20,
  },
  buttonDownload: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: 0,
    fontSize: 16,
    fontWeight: "bolder",
    textTransform: "Capitalize",
    color: theme.palette.secondary.main,
    marginTop: "5vh",
    "&:hover" :{
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    }
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <p className={classes.title}>Customers analyze data <span className={classes.titleSpan}>80% faster</span></p>
          <p className={classes.desc}>Free your analysts from inefficient tools and workflows</p>
          <Button
            variant={"outlined"}
            className={classes.buttonDownload}
            onClick={() => window.open("https://ciusji.gitbook.io/spotrix/installing/installing-from-pip", "_target")}
          >
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}