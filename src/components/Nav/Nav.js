import React, { Component } from 'react';
import {AppBar, Toolbar, SwipeableDrawer, Breadcrumbs} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import NavList from './NavList';
import Link from '../DelayLink';
import {Units as unitsData, Traits as traitsData} from '../../assets/UnitSets';
// import {} from '../../assets/ItemSets';
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
    getCurrentDirectory = () => {
        let urlPath = this.props.match.url.split('/');
        urlPath[1] = urlPath[1].charAt(0).toUpperCase() + urlPath[1].slice(1);
        let breadcrumb = [<Link key={1} to={'/' + urlPath[1]}>{urlPath[1]}</Link>];
        let letter = parseInt(urlPath[2]);
        if(!isNaN(letter)){
            breadcrumb.push( <Typography key={2}> {letter} </Typography> )
        }
        return breadcrumb;
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
                    <Breadcrumbs separator="›" aria-label="Breadcrumb">
                        <Link to="/">
                            Home
                        </Link>
                        {this.getCurrentDirectory()}
                    </Breadcrumbs>
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
