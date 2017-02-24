import React from 'react';
import styles from './index.less'

const getRounds = () => {
    const rounds = [];
    for (let i = 1; i <= 4; i++) {
        rounds.push(
            <div className={`circle${i}`} key={`circle${i}`}></div>
        );
    }
    return rounds;
};

const getContainers = () => {
    const res = [];
    for (let i = 1; i <= 3; i++) {
        res.push(
            <div className={`spinner-container container${i}`} key={i}>
                {
                    getRounds()
                }
            </div>
        )
    }
    return res;
}

const Loading = () => (
    <div className="maskj-conatiner">
        <div className="loading">
            <div className="spinner">
                {
                    getContainers()
                }
            </div>
        </div>
    </div>
);

export default Loading;