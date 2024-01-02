import logo from "./logo.svg";
import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

//count would probaby need some type of onClick functionality. so if square clicked. then increment count

/* need to use tooltipDataAttrs to get the specified date we clicked on. one we click on that date
We can add someClick count to the values object for the specified date.
*/

/*Shifts the number of days from the start of the year. so (2024-01-01, 10) would be something like january 11th*/
function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

//reafactor this.
function generateValuesForYear(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // Jan 1st of the given year
  const values = [];

  for (let day = 0; day < 365; day++) {
    values.push({
      date: shiftDate(startOfYear, day),
      count: day + 1, // For example, setting the day of the year as the count
    });
  }

  return values;
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CalendarHeatmap
          //onClick?: ((value: any) => void) | undefined;
          //classForValue?: ((value: any) => any) | undefined
          className="calendar-heatmap"
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-12-31")}
          onClick={(value) =>
            alert(`You clicked on ${value.date.toISOString().slice(0, 10)}}`)
          }
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
