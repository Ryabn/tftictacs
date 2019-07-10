import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {List, ListItem, ListSubheader, ListItemText, Collapse} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Link from '../DelayLink';
import './Nav.css';


export class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            units: false
        };
    }
    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({'open': open});
    };
    toggleList = (open) => {
        this.setState(state => ({[open]: !state[open]}));
    }
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
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            tft.help
                            </ListSubheader>
                        }
                        className="nav-list--holder"
                        >
                        <ListItem button onClick={() => this.toggleList('items')}>
                            <ListItemText primary="Items" />
                            {this.state.items ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.items} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button>
                                <Link delay={0} to='/items'>
                                    <ListItemText primary="Items" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button onClick={() => this.toggleList('traits')} >
                            <ListItemText primary="Traits" />
                            {this.state.traits ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.traits} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button>
                                <Link delay={0} to='/traits'>
                                    All Traits
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button>
                            <Link delay={0} to='/units'>
                                <ListItemText primary="Units" />
                            </Link>
                            {this.state.units ? <ExpandLess onClick={() => this.toggleList('units')} /> : <ExpandMore onClick={() => this.toggleList('units')} />}
                        </ListItem>
                        <Collapse in={this.state.units} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            </List>
                        </Collapse>
                        <div className="legal-jibber-jabber">
                            tft.help was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
                        </div>
                    </List>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default Nav;
