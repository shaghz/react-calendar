import React from 'react';
import DayNames from './DayNames';
import Week from './Week';
import '../styles.scss';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            month: moment().locale('fa'),

        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    /** what happens when you click on previous button
     *
     */
    previous() {
        let {month} = this.state;
        this.setState({
            month: month.subtract(1, 'month'),
        });
    }

    /** what happens when you click on next button
     *
     */
    next() {
        let {month} = this.state;
        this.setState({
            month: month.add(1, 'month'),
        });
    }

    /** lets have month names on header
     *
     */
    renderMonthLabel() {
        let {month} = this.state;
        return <span className="month-label">{month.format("MMMM YYYY")}</span>;
    }

    /** make a week
     *
     */
    renderWeek() {
        let {month} = this.state;
        let date = month.format('YYYY/MM/D');
        let weeks = [];
        /** make an array for month which has month days in 7 day format
         *
         */
        let weekStartDay = month.startOf('jMonth').weekday();
        let monthDays = parseInt(month.endOf('month').format("jD"));
        let daysOfMonthArray = Array(monthDays).fill(0).map((e, i) => i + 1);
        while (weekStartDay > 0) {
            daysOfMonthArray.unshift('');
            weekStartDay--;
        }
        let daysOfEachWeek = chunks(daysOfMonthArray, 7);
        weeks.push(
            <Week
                date={date}
                daysOfEachWeek={daysOfEachWeek}

            />
        );
        return weeks;
    };

    /** render what we had in a calendar
     *
     */
    render() {

        return (
            <div className="calendar">
                <div className="header">
                    <input type="button" value="<" onClick={this.previous}/>
                    {this.renderMonthLabel()}
                    <input type="button" value=">" onClick={this.next}/>
                </div>
                <table>
                    <tbody>
                    <DayNames/>
                    {this.renderWeek()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;