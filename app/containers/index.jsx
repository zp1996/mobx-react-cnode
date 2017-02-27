import React, { Component } from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames';
import Loading from 'Components/Loading';
import Page from 'Components/Page';
import TopicTab from 'Components/TopicTab';
import config from 'Root/config';

const TopicList = ({list}) => (
    <ul className="topic-list">
        {
            list.map(val => {
                const { tab, top, good, id, title, 
                    reply_count, visit_count, author } = val,
                    classes = classnames({
                        'topic-tab': true,
                        'topic-nice-tab': top || good
                    });
                return (
                    <li key={id} className="cell">
                        <img src={author.avatar_url} title={author.loginname} className="user-img" />
                        <span className="topic-counts">
                            <span className="reply-count">{reply_count}</span>
                            /
                            <span className="visit-count">{visit_count}</span>
                        </span>
                        <TopicTab tab={tab} good={good} top={top} />
                        <Link to={`/topic/${id}`} className="topic-title">
                            {title}
                        </Link>
                    </li>
                )
            })
        }
    </ul>
);

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = this.getState(props.store);
        console.log('render了啊');
    }
    getState(store) {
        const { list } = store;
        return {
            loading: !list.length,
            list
        };
    }
    componentWillMount() {
        const { tab, page } = this.props.location.query;
        this.state.tab = tab || 'all';
        this.state.page = +page || 1;
    }
    componentDidMount() {
        if (this.state.loading) {
            this.getList();
        }
    }
    componentWillReceiveProps(nextProps) {
        const { tab, page } = this.state,
            nextTab = nextProps.location.query.tab || 'all',
            nextPage = +nextProps.location.query.page || 1,
            flag = tab === nextTab && page === nextPage;  // 防止点击同一url也会re-render
        this.flag = flag;
        if (!flag) {
            this.setState({
                loading: true,
                tab: nextTab,
                page: nextPage
            }, () => {
                this.getList();
            });
        } 
    }
    shouldComponentUpdate(nextProps, nextState) {
        const res = !this.flag;
        this.flag = false; 
        return res;
    }
    getList() {
        console.log(true);
        const { store }= this.props,
            { tab, page } = this.state;
        store.fetchList(`tab=${tab}&page=${page}`)
            .then(() => {
                this.setState(
                    this.getState(store)
                );
            });
    }
    getHeader() {
        const keys = Object.keys(config),
            { tab } = this.state;
        return (
            <div className="main-content-header">
                {
                    keys.map(key => {
                        const classes = classnames({
                            'index-container-tab': true,
                            'active-container-tab': tab === key
                        });
                        return (
                            <Link to={`/?tab=${key}`} 
                                key={key}
                                className={classes}
                            >{config[key]}</Link>
                        );
                    })
                }
            </div>
        );
    }
    render() {
        const { loading, list, tab, page } = this.state;
        return (
            <div className="main-content">
                {
                    loading ? (
                        <div className="mask-container">
                            <Loading />
                        </div>) : (
                            <div className="conatiner">
                                {this.getHeader()}
                                <TopicList list={list} />
                                <Page active={page} end={15} link={`tab=${tab}&page`} />
                            </div>
                        )
                }
            </div>
        );
    }
}

export default Index;