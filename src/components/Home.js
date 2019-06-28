import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home-selection">
                <Link to='/items'>
                    <div className="home-selection--button home-items">
                        Items
                    </div>
                </Link>
                <Link to='/units'>
                    <div className="home-selection--button home-units">
                        Units
                    </div>
                </Link>
            </div>
        )
    }
}

export default Home;
