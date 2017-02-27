import React from 'react';
import path from 'path';
import express from 'express';
import { Provider } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './app/routes';
import Store from 'Stores';
import serverRouter from './router';

const app = new express(),
    port = 9000;

app.use(express.static(path.join(__dirname)));
// server端接口
serverRouter(app, express);
// 渲染
app.use((req, res, next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
        console.log(props);
        if (err) {
            res.status(500).end(`Interal Server Error`);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            const store = new Store();
            html = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );
            res.render('index.ejs', {
                html, 
                title: 'text'
            });
        } else {
            res.status(404).end('404 Not Found');
        }
    });
});

app.listen(port, () => {
    console.log(`server is on ${port}`);
});