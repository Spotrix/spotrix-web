import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "55vh",
    backgroundColor: "white",
    backgroundImage: 'url(' + require('../../../images/bg-main.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  },
  mainPart: {
    height: "100%",
    width: "100%",
    animation: `$myFirst 1.75s`,
  },
  "@keyframes myFirst": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
  paperCenter: {
    height: "90%",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  homeImg: {
    height: "70vh",
  },
  smallLogo: {
    height: 23,
  },
  logoSlogan: {
    fontSize: 64,
    fontWeight: 800,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  logoBody: {
    fontSize: 19,
    fontWeight: 500,
  },
  buttonInfoToMore: {
    fontSize: 16,
    fontWeight: 800,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(5),
    backgroundColor: "white",
    borderColor: "white",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 25,
    "&:hover": {
      color: "white",
    },
    textTransform: "Capitalize",
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1(props) {
  const classes = useStyles();

  const defaultSystemName = "Spotrix";

  const sloganBody = "spotrix, explore insights for everyone";

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.mainPart}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.paperCenter}>
            <div>
              <p className={classes.logoSlogan} id="slogan">
                {props.isSubsystem ? props.item.name : defaultSystemName}
              </p>
            </div>
            <div>
              <p className={classes.logoBody}>
                {sloganBody}
              </p>
            </div>
            <div>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
              >
                Download
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}