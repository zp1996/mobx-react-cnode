import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './index.less';

class Page extends Component {
    static propTypes = {
        limit: PropTypes.number.isRequired,
        active: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired
    };
    static defaultProps = {
        limit: 5
    };
    static getLinks(active, end, limit) {
        const mid = ~~(limit / 2),
            res = [], 
            flag = end - mid > active;
        var s, e;
        if (active - mid <= 1) {
            s = 1;
            e = end < limit ? end : limit;
        } else {
            res.push({ text: '...', page: null });
            if (!flag) {
                s = end - limit + 1;
                e = end;
            } else {
                s = active - mid;
                e = active + mid;
            }
        }
        for (let i = s; i <= e; i++) {
            res.push({ text: i, page: i });
        }
        flag && res.push({ text: '...', page: null });
        return res;
    }
    constructor(props) {
        super(props);
        this.state = {
            active: props.active
        };
    }
    render() {
        const { end, link, limit } = this.props,
            { active } = this.state,
            pageLinks = Page.getLinks(active, end, limit);
        return ( 
            <div className="page-area">
                <ul>
                    <li>
                        {
                            active === 1 ? <span className="page-link-to first-page">«</span> : 
                                <Link to={`/?${link}=1`} className="first-page">«</Link>
                        }
                    </li>
                    {
                        pageLinks.map((page, i) => (
                            <li key={i}>
                                {
                                    page.page ? (
                                        <Link data-page={page.page} 
                                            to={`/?${link}=${page.page}`}
                                            className={page.page === active ? 'active-page' : ''}
                                        >
                                            {page.text}
                                        </Link>
                                    ) : <span className="dot">{page.text}</span>
                                }
                            </li>
                        ))
                    }
                    <li>
                        {
                            active === end ? <span className="page-link-to end-page">»</span> : 
                                <Link to={`/?${link}=${end}`} className="end-page">»</Link>
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;