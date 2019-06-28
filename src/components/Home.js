import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home-selection">
                <Link to='/items'>
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
                </Link>
            </div>
        )
    }
}

export default Home;
