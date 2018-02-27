import React from 'react';
import Day from './day';
class Week extends React.Component {


    chunkWeek(weekStartDay, MonthDays) {
        //white space for previous month ,loose one for each cell
        let daysOfMonthArray = Array(MonthDays).fill(0).map((e, i) => i + 1);
        while (weekStartDay > 0) {
            daysOfMonthArray.unshift('');
            weekStartDay--;
        }
        return chunks(daysOfMonthArray, 7);
    }

    getCalendar(date, weekStartDay, MonthDays) {
        let days = [];
        let daysOfEachWeek = this.chunkWeek(weekStartDay, MonthDays);

        for (let i = 0; i < daysOfEachWeek.length; i++) {
            days.push(
                <Day
                    date={daysOfEachWeek[i]}
                />
            );

        }
        return days;

    }

    render() {
        let {weekStartDay, MonthDays, date} = this.props;

        console.log(this.getCalendar(date, weekStartDay, MonthDays));
        return (

            <tr>
                {this.getCalendar(date, weekStartDay, MonthDays)}
            </tr>

        );
    }

}

export default Week;