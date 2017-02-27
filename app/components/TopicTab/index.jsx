import React from 'react';
import config from 'Root/config';

const getTab = (tab, top, good) => top ? '置顶' : good ? '精华' : config[tab],
    getClasses = (top, good) => (
    	classnames({
           'topic-tab': true,
           'topic-nice-tab': top || good
    	})
    );

const TopicTab = ({tab, top, good}) => (
    (tab || good) ? <span className={getClasses(top, good)}>
        {getTab(tab, top, good)}
    </span> : null
);

export default TopicTab;