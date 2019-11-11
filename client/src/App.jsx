import React from "react";
import "./App.css";
import Header from "./components/header";
import TabBar from "./components/tabbar";

function App(props) {
  return (
    <div>
      <Header address={props.address}></Header>
      <TabBar></TabBar>
      {props.children}
    </div>
  );
}

export default App;
