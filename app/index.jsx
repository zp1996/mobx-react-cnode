import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import styles from 'Styles/index.less';
import App from './App';
import Store from 'Stores';

useStrict(true);

const store = new Store();

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);