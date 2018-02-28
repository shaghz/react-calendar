import React from 'react';
import events from './data.json';

class Event extends React.Component {
    /** Check for events
     *
     */
    getEvent(currentDayEvent, date) {

        let eventArray = [];
        for (let k = 0; k < events.events.length; k++) {
            if (events.events[k].date === date) {
                let event = events.events[k].caption;
                eventArray.push(
                    <div className="event" key={k}> {event}
                    </div>
                );
            }
        }

        return eventArray;
    }

    render() {
        let {date, day} = this.props;
        return this.getEvent(day, date);
    }
}

export default Event;