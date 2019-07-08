import React, { Component } from 'react';
import { Units as UnitData } from '../../assets/UnitSets';
import Unit from './Unit.js';
import Nav from '../Nav/Nav';
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
        }
    }
    render() {
        const s = this.state;
        return (
            <div className="units-page">
                <Nav />
                <div className="units-list-holder">
                    {s.units}
                </div>
            </div>
        )
    }
}

export default Units;
