import React, { Component } from 'react';
import Link from './DelayLink';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home-selection--updated">
                <Link delay={190} to='/items'>
                    <div className="home-item--link home-item">
                        <div className="loading-icon--text">
                            ITEMS
                        </div>
                        <div className="loading-icon--holder">
                            <div className="loading-icon--hex"></div>
                        </div>
                    </div>
                </Link>
                <Link delay={190} to='/traits'>
                    <div className="home-trait--link home-item">
                        <div className="loading-icon--text">
                            TRAITS
                        </div>
                        <div className="loading-icon--holder">
                            <div className="loading-icon--hex"></div>
                        </div>
                    </div>
                </Link>
                <Link delay={190} to='/units'>
                    <div className="home-unit--link home-item">
                        <div className="loading-icon--text">
                            UNITS
                        </div>
                        <div className="loading-icon--holder">
                            <div className="loading-icon--hex"></div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Home;
