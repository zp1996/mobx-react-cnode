import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Loading from 'Components/Loading';
import MarkDown from 'Components/MarkDown';

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
                this.setState({
                    loading: false,
                    data: store.topic
                });
            });
    }
    render() {
        const { loading, data } = this.state;
        return (
            <div>
                {
                    loading ? <Loading /> : (
                            <div className="conatiner">
                                <MarkDown text={data.content} />
                            </div>
                        )
                }
            </div>
        );
    }
}

export default Topic;