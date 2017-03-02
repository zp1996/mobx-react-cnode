import React from 'react';
import path from 'path';
import express from 'express';
import ejs from 'ejs';
import { Provider } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './app/routes';
import Store from 'Stores';
import serverRouter from './router';

const app = new express(),
    port = 9000;

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname)));

// server端接口
serverRouter(app, express);
// 渲染
app.use((req, res, next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).end(`Interal Server Error`);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            const store = new Store();
            let { _parsedUrl: { pathname, search } } = req,
                flag = Boolean(getStore[pathname]);
            if (!flag) {
                let urlData = getUrl(pathname);
                pathname = urlData.pathname;
                search = urlData.search;
            }
            getStore[pathname](store, search).then(() => {
                    const html = renderToString(
                        <Provider store={store}>
                            <RouterContext {...props} />
                        </Provider>
                    );
                    res.render('index.ejs', {
                        html, 
                        title: 'text',
                        store: JSON.stringify(store)
                    });
                });
        } else {
            res.status(404).end('404 Not Found');
        }
    });
});

const getStore = {
    '/': (store, search) => {
        search = search || '';
        return store.fetchList(search);
    },
    '/topic': (store, search) => {
        return store.fetchTopic(search);
    }
};
const defaultMemoize = fn => {
    let lastArg = null,
        lastRes = null;
    return arg => {
        if (
            lastArg === null ||
            lastArg !== arg
        ) {
            lastRes = fn(arg);
        }
        lastArg = arg;
        return lastRes;
    };
};
const getUrl = defaultMemoize(url => {
    const index = url.lastIndexOf('/');
    return {
        pathname: url.slice(0, index),
        search: url.slice(index + 1)
    };
});

app.listen(port, () => {
    console.log(`server is on ${port}`);
});