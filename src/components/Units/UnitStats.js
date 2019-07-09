import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Unit from './Unit';
import {Traits as TraitData, Units as UnitData} from '../../assets/UnitSets';
import './Units.css';

export class UnitStats extends Component {
    constructor(props){
        super(props);
        this.state = this.displayUnitStats();
    }
    componentDidUpdate = ( prevProps ) => {
        if(this.props.match.params.unit !== prevProps.match.params.unit){
            this.setState(this.displayUnitStats());
        }
    }
    displayUnitStats = () => {
        let id = this.props.match.params.unit;
        let traitComponentBuilder = []
        
        return ({
            unitComponent: <Unit key={id} id={id}/>,
            traitComponents: traitComponentBuilder
        });
    }
    render() {
        let s = this.state;
        return (
            <div className="unit-stats-page">
                <Nav />
                {s}
            </div>
        )
    }
}

export default UnitStats;
