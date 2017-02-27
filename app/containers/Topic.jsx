import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Loading from 'Components/Loading';
import MarkDown from 'Components/MarkDown';
import TopicTab from 'Components/TopicTab';
import styles from 'Styles/topic.less';
import config from 'Root/config';

@inject('store') @observer
class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            topic: props.store.topic,
            id: props.params.id
        };
    }
    componentDidMount() {
        const { store } = this.props;
        store.fetchTopic(this.state.id)
            .then(() => {
                console.log(store.topic);
                this.setState({
                    loading: false,
                    data: store.topic
                });
            });
    }
    render() {
        const { loading, data } = this.state;
        return (
            loading ? <Loading /> : (
                    <div className="topic-content-conatiner main-content">
                        <div className="topic-header">
                            <span className="topic-header-title">
                                <TopicTab tab={data.tab} good={data.good} top={data.top} />
                                {data.title}
                            </span>
                            <span className="topic-header-info">
                                <span>作者 {data.author.loginname} </span>
                                <span>{data.visit_count} 次浏览 </span>
                                <span>来自 {config[data.tab]} </span>
                            </span>
                        </div>
                        <MarkDown text={data.content} />
                    </div>
                )
        );
    }
}

export default Topic;