import logo from "./logo.svg";
import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import React from "react";
import Calender from "./components/calendar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Calender />
      </div>
    </div>
  );
}

export default App;
