import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavList from './NavList';
import {withRouter} from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }
    componentDidUpdate = (props) => {
        if(props.match.params !== this.props.match.params){
            this.setState({
                open: false
            });
        }
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
                 <AppBar
                    position="static"
                    className="nav"
                    style={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        color: 'black'
                    }}
                    margin="normal"
                >
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
                    {/* <div className="nav-search--holder">
                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                    </div> */}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    className="nav-drawer"
                    >
                    <NavList tab={this.props.tab}/>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default withRouter(Nav);
