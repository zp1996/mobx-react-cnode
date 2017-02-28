import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import styles from 'Styles/index.less';
import App from './App';
import Store from 'Stores';

useStrict(true);

// 服务端渲染之后再来挂载方法
function clientInit(server, client) {
    [
        "api", "getstart", "about", "fetchAPI",
        "fetchGETSTART", "fetchList", "fetchABOUT",
        "fetchTopic"
    ].forEach(val => {
       	server[val] = server[val] || client[val];
    });
}

const clientStore = new Store();
const store = window.__store__ || clientStore;
store.req = Boolean(window.__store__);
store.req && clientInit(store, clientStore);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);