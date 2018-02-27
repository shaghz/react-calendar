import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './calendar';
import NoMatch from './NoMatch';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Calendar} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;