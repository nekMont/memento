import logo from "./logo.svg";
import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CalendarHeatmap
          className="calendar-heatmap"
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-12-31")}
          values={[
            { date: "2024-01-01", count: 12 },
            // ...and so on
          ]}
        />
      </div>
    </div>
  );
}

export default App;
