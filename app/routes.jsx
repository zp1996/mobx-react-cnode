import React, { Component } from 'react';
import { Route, Router, browserHistory, IndexRoute  } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Index from 'Containers/index';
import API from 'Containers/API';
import GetStart from 'Containers/GetStart';
import About from 'Containers/About';
import Topic from 'Containers/Topic';

const Container = ({children, location}) => (
    <ReactCSSTransitionGroup
            component="div"
            className="tranistion-wrapper"
            transitionName="route"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
        >
        <div key={location.pathname} className="router-container">
            <div className="main-container">
                {children}
            </div>
        </div>
    </ReactCSSTransitionGroup>
);

export default () => (
    <Router history={browserHistory}>
        <Route path="/(?)" component={Container}>
            <IndexRoute component={Index} />
            <Route path="api" component={API} />
            <Route path="getstart" component={GetStart} />
            <Route path="about" component={About} />
            <Route path="topic/:id" component={Topic} />
        </Route>
    </Router>
);