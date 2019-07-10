import React, { Component } from 'react';
import Link from './DelayLink';
import './Home.css';

export class Home extends Component {
    render() {
        return ([
                <div className="home-selection--updated">
                    <Link delay={190} to='/items'>
                        <div className="home-item--link home-item">
                            <div className="loading-icon--text">
                                items
                            </div>
                            <div className="loading-icon--holder">
                                <div className="loading-icon--hex"></div>
                            </div>
                        </div>
                    </Link>
                    <Link delay={190} to='/traits'>
                        <div className="home-trait--link home-item">
                            <div className="loading-icon--text">
                                traits
                            </div>
                            <div className="loading-icon--holder">
                                <div className="loading-icon--hex"></div>
                            </div>
                        </div>
                    </Link>
                    <Link delay={190} to='/units'>
                        <div className="home-unit--link home-item">
                            <div className="loading-icon--text">
                                units
                            </div>
                            <div className="loading-icon--holder">
                                <div className="loading-icon--hex"></div>
                            </div>
                        </div>
                    </Link>
                </div>,
                <div className="legal-jibber-jabber--home">
                    Note: tft.help was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
                </div>
            ]
        )
    }
}

export default Home;
