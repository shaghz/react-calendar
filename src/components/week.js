import React from 'react';

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

            for (let j = 0; j < daysOfEachWeek[i].length; j++) {
                let day = daysOfEachWeek[i][j];
                days.push(
                    <td className="eachDay"> {day} </td>
                );

            }

        }

        return days;
    }

    render() {
        let {weekStartDay, MonthDays, date} = this.props;

        console.log('hiii'+this.getCalendar(date, weekStartDay, MonthDays));
        return (
            <tbody>
            <tr>
                {this.getCalendar(date, weekStartDay, MonthDays)}
            </tr>
            </tbody>
        );
    }

}

export default Week;