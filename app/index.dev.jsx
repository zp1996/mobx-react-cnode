import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import styles from 'Styles/index.less';
import App from './App';
import Store from 'Stores';

useStrict(true);

const store = new Store();

const HotRender = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>
        , document.getElementById('root')
    );
};
  
HotRender(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        HotRender(App)
    });
}

