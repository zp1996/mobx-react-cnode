import React from 'react';
import { observer, inject } from 'mobx-react';
import ShowInfo from 'Components/ShowInfo';

const About = inject('store')(
    observer(({store}) => (
        <ShowInfo store={store} name="关于" dataKey="about" />
    ))
);

export default About;