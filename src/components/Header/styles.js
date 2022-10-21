import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => {
  return ({
    appBar: {
      width: "100vw",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#ffffff",
      color: theme.palette.primary.main,
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logo: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      height: 48,
    },
    grow: {
      flexGrow: 1,
    },
    subTitle: {
      width: 100,
      color: theme.palette.text.primary,
      fontSize: 15,
      "&:hover": {
        cursor: "pointer",
      },
      textAlign: "center",
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    headerMenu: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(2),
    },
    productTitle: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.primary,
      fontSize: 15,
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      }
    },
    productDesc: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.secondary,
      fontSize: 13,
    },
    buttonDownload: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      borderRadius: 0,
      textTransform: "Capitalize",
      color: theme.palette.secondary.main,
      fontWeight: "bolder",
      "&:hover" :{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
      }
    },
  });
});
