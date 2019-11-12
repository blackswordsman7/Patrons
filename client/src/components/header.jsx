import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  address: {
    position: "relative",
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  addressIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  addressRoot: {
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 7),
    width: "100%"
  }
}));

let ElevationScroll = props => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Grants
            </Typography>
            <div className={classes.address}>
              <div className={classes.addressIcon}>
                <FiberManualRecordIcon color="inherit" fontSize="small" />
              </div>
              <Typography variant="h6" className={classes.addressRoot}>
                {props.address === undefined
                  ? "Loading"
                  : props.address.substr(0, 4) +
                    "..." +
                    props.address.substr(-4, 4)}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}

export default Header;
