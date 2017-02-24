import React, { Component } from 'react';
import { logo, links } from './config';
import { browserHistory  } from 'react-router';
import { Link } from 'react-router';
import styles from './index.less';

const link = (e, href) => {
    e.preventDefault();
    browserHistory.push(href);
};

const Header = () => (
    <header className="web-header">
        <div className="web-header-container">
            <a href="/" onClick={(e) => link(e, '/')} id="logo">
                <img src={logo} />
            </a>
            <ul className="web-header-nav">
                {
                    links.map((val, i) => {
                        const { href, name } = val;
                        return (
                            <li key={i}>
                                <a href={href} 
                                   onClick={(e) => link(e, href)}
                                >
                                    {name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </header>
);

export default Header;