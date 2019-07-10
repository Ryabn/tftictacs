import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Unit from './Unit';
import Trait from '../Traits/Trait';
import {Units as UnitData} from '../../assets/UnitSets';
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
        let traitComponentBuilder = UnitData[id].origin.concat(UnitData[id].class).map(traitID => {
            return <Trait key={traitID} id={traitID} />
        });
        
        return ({
            unitComponent: <Unit key={id} id={id}/>,
            traitComponents: traitComponentBuilder
        });
    }
    render() {
        let s = this.state;
        return (
            <div className="units-page">
                <Nav />
                <div className="scrollable-list">
                    <div className="unit-stats--holder">
                        {s.unitComponent}
                        {s.traitComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default UnitStats;
