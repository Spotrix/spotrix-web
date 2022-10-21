import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

// styles
import useStyles from "./styles";

// pictures
import SpotrixFooterLogo from "../../images/spotrix-footer.svg";

export default function Footer() {
  const classes = useStyles();

  const currentYear = new Date().getFullYear()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.footerPos}>
            <Grid item xs={2}>
              <img
                src={SpotrixFooterLogo}
                className={classes.logo}
                alt="spotrix-logo-footer"
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>Why Spotrix</b>
                  <p className={classes.body2}>Platform overview</p>
                  <p className={classes.body2}>Augment & diagnose</p>
                  <p className={classes.body2}>Monitor & alert</p>
                  <p className={classes.body2}>Predict & act</p>
                  <p className={classes.body2}>Customers</p>
                  <p className={classes.body2}>Technology</p>
                  <p className={classes.body2}>Security</p>
                  <p className={classes.body2}>Use cases</p>
                  <p className={classes.body2}>Dashboards</p>
                  <p className={classes.body2}>Explorations</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>By Industry</b>
                  <p className={classes.body2}>eCommerce</p>
                  <p className={classes.body2}>Supply Chain</p>
                  <p className={classes.body2}>Media & Entertainment</p>
                  <p className={classes.body2}>Tech</p>
                  <p className={classes.body2}>Gaming</p>
                  <p className={classes.body2}>Retail</p>
                  <p className={classes.body2}>Financial Services</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>By Role</b>
                  <p className={classes.body2}>Business Leaders</p>
                  <p className={classes.body2}>Data Teams</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/Spotrix", "_target")}>
                    GitHub
                  </p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>GuinsooLab</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>GuinsooLab Stack</p>
                  <p className={classes.body2} onClick={() => window.open("https://guinsoolab.github.io/glab", "_target")}>GuinsooLab Solutions</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/IreliaTable", "_target")}>IreliaTable</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ElixirNote", "_target")}>ElixirNote</p>
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <b className={classes.title2}>Resource</b>
                  <p className={classes.body2}>Blog</p>
                  <p className={classes.body2}>Resource center</p>
                  <p className={classes.body2}>Documentation</p>
                  <p className={classes.body2}>Glossary</p>
                  <p className={classes.body2}>KPI Library</p>
                  <p className={classes.body2}>Supported data source</p>
                </Grid>
                <Grid item xs={4} className={classes.footerBody}>
                  <InputBase className={classes.input} placeholder={"Enter email address"} />
                </Grid>
                <Grid item xs={2} className={classes.footerBody}>
                  <Button className={classes.button}>GET A DEMO</Button>
                </Grid>
                <Grid item xs={1} className={classes.footerBody} />
              </Grid>
            </Grid>
          </Grid>
          {/* divider */}
          <Divider className={classes.appDivider} />
          <p>
            <span className={classes.rightItems}>
              © 2021-{currentYear} Spotrix & GuinsoooLab
            </span>
            <span className={classes.gapTag} />
            <span className={classes.gapTag} />
            <span className={classes.rightItems} onClick={() => window.open("https://github.com/Spotrix", "_target")}>About Us</span>
            <span className={classes.gapTag}>|</span>
            <span className={classes.rightItems} onClick={() => window.open("https://github.com/Spotrix", "_target")}>Terms of Service</span>
            <span className={classes.gapTag}>|</span>
            <span className={classes.rightItems} onClick={() => window.open("https://github.com/Spotrix", "_target")}>Private Policy</span>
          </p>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}