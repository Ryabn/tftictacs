import React, { Component } from 'react';
import { UnitData } from '../assets/UnitSets';
import Unit from './Unit.js';

export class Units extends Component {
    constructor(props){
        super(props);
        this.state = {
            units: []
        }
    }
    render() {
        const s = this.state;
        return (
            <div>
                {s.units}
            </div>
        )
    }
}

export default Units;
