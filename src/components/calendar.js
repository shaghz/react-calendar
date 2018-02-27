import React from 'react';
import DayNames from './daynames';
import Week from './week';
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

    previous() {
        let {month} = this.state;
        this.setState({
            month: month.subtract(1, 'month'),
        });

    }

    next() {
        let {month} = this.state;
        this.setState({
            month: month.add(1, 'month'),
        });
    }

    renderMonthLabel() {
        let {month} = this.state;
        return <span className="month-label">{month.format("MMMM YYYY")}</span>;
    }

    renderWeek() {
        let {month} = this.state;
        let date = month.format('YYYY/MM/DD');
        let weeks = [];
        let done = false;
        let weekStartDay = month.startOf('jMonth').weekday();
        let MonthDays = parseInt(month.endOf('month').format("jD"));
        weeks.push(
            <Week
                date={date}
                weekStartDay={weekStartDay}
                MonthDays={MonthDays}
            />
        );
console.log('weeks'+weeks)
        return weeks;
    };

    render() {

        return (
            <section className="calendar">
                <table>
                    <tr className="header">

                            <div className="month-display row">
                                <input type="button" value="previous" onClick={this.previous}/>
                                {this.renderMonthLabel()}
                                <input type="button" value="next" onClick={this.next}/>
                            </div>


                    </tr>
                    <tr>
                        <DayNames/>
                    </tr>
                    <tr>hi</tr>
                    {this.renderWeek()}
                </table>
            </section>
        );
    }
}

export default Calendar;