import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Header from 'Components/Header';
import Router from './routes';
 
export default () => (
    <div>
        <Header />
        <Router />
    </div>
);