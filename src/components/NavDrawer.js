import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Home from './Home';

export class NavDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true
        };
    }
    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({'open': open});
    };
    componentDidUpdate = (props) => {
        if(props.open !== this.state.open){
            this.setState({open: props.open});
        }
    }
    render() {
        return (
            <div>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    style={{width: '250px'}}
                    >
                    <Home />
                </SwipeableDrawer>
            </div>
        )
    }
}

export default NavDrawer
