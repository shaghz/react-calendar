import React from 'react';
import Event from './Event.js';

class Day extends React.Component {
    /** sets today date to check for events
     *
     */
    constructor() {
        super();
        this.state = {
            dateNow: moment().locale('fa').format('YYYY/MM/D'),
        };
    }
    /** gets the calendar days
     *
     */
    getDay(weekArray, date) {
        let dayArray = [];
        let {dateNow} = this.state;
        let isToday = false;
        for (let j = 0; j < weekArray.length; j++) {
            let day = weekArray[j];
            let dateArray = date.split('/');
            let currentDay = dateArray[0] + '/' + dateArray[1] + '/' + day;
            isToday = currentDay === dateNow;
            dayArray.push(
                <td className={"day" + (isToday ? " today" : "")}> {day}
                    <Event date={currentDay}
                           day={day}
                    />
                </td>
            );
        }
        return dayArray;

    }

    render() {

        let {daysOfWeek, date} = this.props;
        return this.getDay(daysOfWeek, date);
    }
}

export default Day;