import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home-selection--updated">
                {/* <Link to='/items'>
                    <Card className="home-selection--button home-items--button">
                        <div className="home-selection--avatar home-items--avatar"></div>
                        ITEMS
                    </Card>
                </Link>
                <Link to='/units'>
                    <Card className="home-selection--button home-units--button">
                        <div className="home-selection--avatar home-units--avatar"></div>
                        UNITS
                    </Card>
                </Link> */}
                <Link to='/items'>
                    <div className="home-item--link">
                        items
                    </div>
                </Link>
                <Link to='/traits'>
                    <div className="home-trait--link">
                        traits
                    </div>
                </Link>
                <Link to='/units'>
                    <div className="home-unit--link">
                        units
                    </div>
                </Link>
            </div>
        )
    }
}

export default Home;
