import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Provider } from "./components/context";

function App() {
  return (
    <div className="App">
      <Provider>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
