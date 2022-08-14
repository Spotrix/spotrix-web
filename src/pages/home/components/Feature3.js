import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

// components
import Title from "../../../components/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: theme.spacing(10),
  },
  featureContainer: {
    height: "30vh",
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  gridCard: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  appName: {
    color: "#000000",
    fontSize: 28,
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  appNameLink: {
    color: theme.palette.primary.main,
    fontSize: 28,
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  featureLongDesc: {
    height: "15vh",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    lineHeight: 1.5,
    color: "#96a5bc",
    fontSize: 18,
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="NextGen Business Features"
        tip="Lack of information strategy, business, technology, and people alignment"
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Smart Narratives
                </p>
                <p className={classes.featureLongDesc}>
                  Get customizable key insights, charts, dashboards, or data through natural language text and voice. Smart narratives show sales and timeline analysis, this visualization allows for creating quick insights in the dashboard. The smart narratives allow users to focus on particular insights by cross-filtering visuals on the page.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Natural Language Q&A
                </p>
                <p className={classes.featureLongDesc}>
                  Natural Language Q&A feature allows you to explore the data through business questions either in text or voice and get answers back in charts, insights, text, or voice. Users can ask questions in natural language and get answers in report visuals, slicers, text, bar charts, etc.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Dynamic Attributes
                </p>
                <p className={classes.featureLongDesc}>
                  Dynamic attributes enable you to add your model and create custom logic, allowing you to change measures, axes, legends, and charts dynamically. This enables the users' analysis of multiple KPIs along various dimensions with simple and intuitive visuals.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Timeline Analysis
                </p>
                <p className={classes.featureLongDesc}>
                  The visualization shows year to year, quarter on quarter, custom time period, and full and partial year/quarter analysis. Users measure total revenue, sales, customers, and in-stock quarter-on-quarter insights.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Infographics
                </p>
                <p className={classes.featureLongDesc}>
                  Infographic BI brings new visual possibilities in dashboards with use of use meaningful images and emojis on charts instead of traditional visuals. Through the infographic visuals, you can represent your bars and columns with custom visuals, graphics, images, etc.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Root cause & key driver analysis
                </p>
                <p className={classes.featureLongDesc}>
                  Root cause analysis is a process of discovering the root cause of a problem and fully understanding how to fix, compensate, and systematically prevent future issues and repeat successes. Key driver analysis tells you the derived importance of potential drivers and customer behavior.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Time series
                </p>
                <p className={classes.featureLongDesc}>
                  Time series helps you in exploring and analyzing major patterns such as trends, seasonality, cyclicity, and irregularity. The time series BI is used for various applications such as economic forecasting, census analysis, stock market analysis, and so on.
                </p>
              </Card>
            </Grid>
            <Grid item xs={6}  className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Demand forecasting
                </p>
                <p className={classes.featureLongDesc}>
                  The nextgen BI plays a pivotal role in making strategies and taking correct measures based on data. Demand forecasting is an essential function of demand planning, estimating future customer demand over a defined period, and predicting outcomes based on historical data and other information.
                </p>
              </Card>
            </Grid>
          </Grid>

          <Grid containe className={classes.featureContainer}>
            <Grid item xs={6} className={classes.gridCard}>
              <Card variant={"outlined"}>
                <p className={classes.appName}>
                  Text Analytics
                </p>
                <p className={classes.featureLongDesc}>
                  Text analytics uses AI-based technologies for deeper analysis, it helps businesses to understand the sentiments and determine key phrases in the given text. Sentiment analysis uses NLP that identifies the emotional tone behind the body of text. Key phrase extraction review text and returning extract key phrases.
                </p>
              </Card>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}