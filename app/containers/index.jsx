import React, { Component } from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import Loading from 'Components/Loading';
import Page from 'Components/Page';

const config = {
        'all': '全部',
        'good': '精华',
        'share': '分享',
        'ask': '问答',
        'job': '招聘'
    },
    getTab = (tab, top, good) => top ? '置顶' : good ? '精华' : config[tab];

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
                        {
                            (tab || good) ? <span className={classes}>
                                {getTab(tab, top, good)}
                            </span> : null
                        }
                        <a href={`/topic/${id}`} className="topic-title">
                            {title}
                        </a>
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
        this.getList();
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
        const { loading, list, tab, page } = this.state,
            classes = classnames({
                'mask-container': loading
            });
        return (
            <div className="main-content">
                {
                    loading ? (
                        <div className={classes}>
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