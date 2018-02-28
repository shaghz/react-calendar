import React from 'react';
import Day from './Day';

class Week extends React.Component {

    /** gets the calendar weeks
     *
     */
    getWeek(date, daysOfEachWeek) {
        let days = [];
        for (let i = 0; i < daysOfEachWeek.length; i++) {
            days.push(
                <tr className="calendarDays" key={i}>
                    <Day
                        date={date}
                        daysOfWeek={daysOfEachWeek[i]}

                    />
                </tr>
            );
        }

        return days;
    }

    /** render each week
     *
     */
    render() {
        let {daysOfEachWeek, date} = this.props;
        return this.getWeek(date, daysOfEachWeek);
    }

}

export default Week;