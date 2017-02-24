import React from 'react';
import styles from './index.less';

const MarkDown = ({text}) => (
    <div className="markdown-area" dangerouslySetInnerHTML={{
        __html: text
    }}></div>
);

export default MarkDown;