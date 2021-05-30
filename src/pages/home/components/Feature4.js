import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from "@material-ui/core/Divider";

// components
import Title from "../../../components/Title";

// pics
import DashboardImg from "../../../images/dashboard.svg";
import InsightsImg from "../../../images/insights.svg";
import DataFlowImg from "../../../images/dataflow.svg";
import CustomImg from "../../../images/custom.svg";


const MainFeatures = [
  {
    id: 1,
    pic: DashboardImg,
    title: "Modern BI & Analytics",
    longDesc: "Serve up real-time dashboards for more in-depth, consistent analysis. Access to trustworthy data enables teams to collect fresh results for more precise reporting.",
    link: "",
  },
  {
    id: 2,
    pic: InsightsImg,
    title: "Integrated Insights",
    longDesc: "Enhance the tools you’re already using by infusing new, relevant data. Unify and empower your teams to make more effective, data-informed decisions.",
    link: "",
  },
  {
    id: 3,
    pic: DataFlowImg,
    title: "Data-Driver Workflows",
    longDesc: "Invigorate your workflows with fresh, reliable data. Spotrix gives teams unified access to the answers they need to drive successful outcomes.",
    link: "",
  },
  {
    id: 4,
    pic: CustomImg,
    title: "Custom Applications",
    longDesc: "Create custom apps that deliver data experiences as unique as your business. Spotrix's embedded analytics solutions, from retail to healthcare, give your customers the data they need to get the job done.",
    link: "",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    height: "70vh",
    marginTop: theme.spacing(2),
  },
  appName: {
    color: "black",
    fontSize: 22,
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
      width: "30vw",
      height: "30vw",
    },
  },
  featureInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  learnMore: {
    marginTop: theme.spacing(4),
    width: "40%",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    fontWeight: 600,
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  buttonLink: {
    marginTop: theme.spacing(5),
  },
  buttonInfoToSystem: {
    margin: "0px 8px",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
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
        tip=""
      />
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
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
                  endIcon={<ArrowRightAltIcon/>}
                  className={classes.learnMore}
                  // onClick={() => window.open(info.link, "_target")}
                >
                  Quick Start
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.featurePic}>
                <img src={info.pic} alt="feature-pic"/>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}