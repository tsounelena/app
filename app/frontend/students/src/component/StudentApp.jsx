

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from "./Student";
import StudentsTable from "./StudentsTable";

class StudentApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Student Application</h1>
                    <Switch>
                        <Route path="/" exact component={StudentsTable} />
                        <Route path="/students" exact component={StudentsTable} />
                        <Route path="/students/:id" component={Student} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default StudentApp