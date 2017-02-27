import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import Header from 'Components/Header';
import routes from './routes';
 
export default () => (
    <div>
        <Header />
        <Router history={browserHistory}>
        	{routes}
        </Router>
    </div>
);