import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Link from '../DelayLink';
import './Nav.css';


export class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({'open': open});
    };
    render() {
        return (
            <div>
                 <AppBar position="static" className="nav" style={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        color: 'black'
                        }}>
                    <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Open Navigation"
                        onClick={this.toggleDrawer(!this.state.open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        tft.help
                    </Typography>
                    <div className="nav-search--holder">
                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                    </div>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    className="nav-drawer"
                    >
                    <div className="nav-selection--updated">
                        <Link delay={190} to='/items'>
                            <div className="nav-item--link nav-item">
                                <div className="loading-icon--text">
                                    items
                                </div>
                            </div>
                        </Link>
                        <Link delay={190} to='/traits'>
                            <div className="nav-trait--link nav-item">
                                <div className="loading-icon--text">
                                    traits
                                </div>
                            </div>
                        </Link>
                        <Link delay={190} to='/units'>
                            <div className="nav-unit--link nav-item">
                                <div className="loading-icon--text">
                                    units
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default Nav
