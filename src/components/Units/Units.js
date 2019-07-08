import React, { Component } from 'react';
import { Units as UnitData } from '../../assets/UnitSets';
import Unit from './Unit.js';
import NavDrawer from '../NavDrawer';
import './Units.css';

export class Units extends Component {
    constructor(props){
        super(props);
        let unitObjects = []
        UnitData.forEach( e => {
            unitObjects.push(<Unit key={e.id} id={e.id}/>);
        });
        this.state = {
            units: unitObjects,
            open: false
        }
    }
    toggleNav = () => {
        this.setState(state => ({
            open: !state.open
        }), console.log(this.state.open));
    }
    render() {
        const s = this.state;
        return (
            <div className="app-container">
                <div className="nav-drawer--trigger" onClick={this.toggleNav}>=werwefksjiugyehjvbkl</div>
                <NavDrawer open={s.open}/>
                <div className="units-list-holder">
                    {s.units}
                </div>
            </div>
        )
    }
}

export default Units;
