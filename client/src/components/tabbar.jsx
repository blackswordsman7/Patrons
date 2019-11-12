import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 12
  }
});

function TabBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const tabList = [
    {
      label: "Grants",
      url: "/grants"
    },
    {
      label: "Create Grants",
      url: "/create-grant"
    },
    {
      label: "Deposit",
      url: "/deposit"
    },
    {
      label: "Wallet",
      url: "/wallet"
    },
    {
      label: "Interest",
      url: "/interest"
    }
  ];

  const getTab = () => {
    console.log(props.location.pathname);
    const tabUrls = tabList.map(tab => tab.url);
    return tabUrls.indexOf(props.location.pathname);
  };

  React.useEffect(() => {
    setValue(getTab());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
      >
        {tabList.map((tab, i) => (
          <Tab
            key={i}
            label={tab.label}
            onClick={event => {
              event.preventDefault();
              props.history.push(tab.url);
            }}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

export default withRouter(TabBar);
