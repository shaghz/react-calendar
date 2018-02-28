import React from 'react';

class DayNames extends React.Component {
    render() {
        return (
            <tr className="row day-names">
                <td className="day">شنبه</td>
                <td className="day">یکشنبه</td>
                <td className="day">دوشنبه</td>
                <td className="day">سه شنبه</td>
                <td className="day">چهارشنبه</td>
                <td className="day">پنج شنبه</td>
                <td className="day">جمعه</td>
            </tr>
        );
    }
}

export default DayNames;