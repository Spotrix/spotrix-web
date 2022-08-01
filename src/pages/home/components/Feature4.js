import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from "@material-ui/core/Divider";

// components
import Title from "../../../components/Title";

// images
import Abstract1 from "../../../images/abstraction-visual-explorer.svg";
import Abstract2 from "../../../images/abstraction-faster-exploration.svg";
import Abstract3 from "../../../images/abstraction-data-points.svg";
import Abstract4 from "../../../images/abstraction-quick-calcs.svg";


const MainFeatures = [
  {
    id: 1,
    image: Abstract1,
    title: "Explore large datasets with ease",
    longDesc: "Switch between data-heavy visualizations fast with Guinsoo — our revolutionary data engine.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 2,
    image: Abstract2,
    title: "Generate limitless visualizations",
    longDesc: "Prepare pivot tables, data facets, combo charts, dual axes with multiple measures, and more.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 3,
    image: Abstract3,
    title: "Highlight key insights",
    longDesc: "Link visual elements, like size or color, to your data and expressively represent your findings.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
  {
    id: 4,
    image: Abstract4,
    title: "Create data aggregations, more simply",
    longDesc: "Perform codeless Quick Calculations and transformations without writing additional SQL.",
    link: "https://ciusji.gitbook.io/spotrix/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    height: "100vh",
    marginTop: theme.spacing(2),
  },
  appName: {
    color: "black",
    fontSize: 32,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  featureLongDesc: {
    marginTop: theme.spacing(2),
    lineHeight: 2,
    color: theme.palette.text.secondary,
    fontSize: 16,
  },
  featurePic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "40vw",
      height: "40vw",
    },
  },
  featureInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  learnMore: {
    marginTop: theme.spacing(6),
    width: "30%",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 40,
  },
}));

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Explore Your Data"
        tip="Building enterprise-ready business intelligence web application"
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          {MainFeatures.map(info => (
            <Grid container
              spacing={5}
              key={info.id}
              className={classes.featureContainer}
              id={info.id}
              direction={info.id % 2 === 0 ? "row-reverse" : "row"}
              justify={"flex-start"}
            >
              <Grid item xs={5} className={classes.featureInfo}>
                <p className={classes.appName}>
                  {info.title}
                </p>
                <Divider className={classes.divider} />
                <p className={classes.featureLongDesc}>
                  {info.longDesc}
                </p>
                <Button
                  variant="outlined"
                  color={"primary"}
                  endIcon={<ArrowRightAltIcon />}
                  className={classes.learnMore}
                  onClick={() => window.open(info.link, "_target")}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.featurePic}>
                <img src={info.image} alt="img" />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}