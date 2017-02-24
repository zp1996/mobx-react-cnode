import React from 'react';
import { observer, inject } from 'mobx-react';
import ShowInfo from 'Components/ShowInfo';

const API = inject('store')(
    observer(({store}) => (
        <ShowInfo store={store} name="API" dataKey="api" />
    ))
);

export default API;