import React from 'react';

class Day extends React.Component {

    getDay(a) {
        let daya=[];
        console.log(a);
        for (let j = 0; j < a.length; j++) {

            let day = a[j];
            console.log(day);
            daya.push(
                <td className="eachDay"> {day} </td>
            );
        }
        return day;

    }

    render() {
        let {date} = this.props;

        return (
            <span> {this.getDay(date)}</span>
        );
    }
}

export default Day;