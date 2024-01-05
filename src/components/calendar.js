import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import React from "react";
import "./calendar.css";

/*TODOS*/
/* Add tooltipDateAttrs on hover*/
/* Add onClick markDown functionality */
/* restrict being able to select for a day after current day*/

/* need to use tooltipDataAttrs to get the specified date we clicked on. one we click on that date
We can add someClick count to the values object for the specified date.
*/

//reference: https://www.kevinqi.com/react-calendar-heatmap/
//https://github.com/kevinsqi/react-calendar-heatmap/blob/master/demo/src/Demo.js

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
      count: 0, // For example, setting the day of the year as the count
    });
  }

  return values;
}

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.counterState = {
      counter: 0,
    };
  }

  incrementCounter = (value) => {
    this.setState((prevState) => {
      const newValues = prevState.values.map((v) => {
        if (v.date === value.date) {
          return { ...v, count: v.count + 1 };
        }
        return v;
      });
      return { values: newValues };
    });
  };

  state = {
    values: generateValuesForYear(),
  };
  handleClick = () => {};

  render() {
    return (
      <CalendarHeatmap
        //onClick?: ((value: any) => void) | undefined;
        //classForValue?: ((value: any) => any) | undefined
        values={this.state.values}
        className="calendar-heatmap"
        startDate={new Date("2024-01-01")}
        endDate={new Date("2024-12-31")}
        onClick={this.incrementCounter}
        classForValue={(value) => {
          if (!value || value.count === 0) {
            return "color-empty";
          }
          return "color-scale-1";
        }}
      />
    );
  }
}

export default Calender;
