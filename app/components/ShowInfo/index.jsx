import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loading from 'Components/Loading';
import MarkDown from 'Components/MarkDown';
import styles from './index.less';


class ShowInfo extends Component {
    static propTypes = {
        dataKey: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            loading: !props.store[props.dataKey]
        };
        this._name = props.dataKey.toUpperCase();
    }
    componentDidMount() {
        if (this.state.loading) {
            this.props.store[`fetch${this._name}`]()
                .then(() => {
                    this.setState({
                        loading: false
                    });
                });
        }
    }
    render() {
        const { loading } = this.state,
            { dataKey, store, name } = this.props;
        return (
            <div className="main-content">
                <div className="main-content-header">
                    <nav>
                        <Link to="/" className="to-home">主页</Link>
                        <span className="divide">/</span>
                        <span className="active-route">{name}</span>
                    </nav>
                </div>
                {
                    loading ? <Loading /> : 
                        <MarkDown text={store[dataKey].text} />
                }
            </div>
        );
    }
}

export default ShowInfo;