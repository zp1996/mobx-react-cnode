import React from 'react';
import { observer, inject } from 'mobx-react';
import ShowInfo from 'Components/ShowInfo';

const GetStart = inject('store')(
    observer(({store}) => (
        <ShowInfo store={store} name="新手入门" dataKey="getstart" />
    ))
);

export default GetStart;