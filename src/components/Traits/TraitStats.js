import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import {Traits as TraitData} from '../../assets/UnitSets';
import Unit from '../Units/Unit';
import Trait from './Trait';
import './Traits.css';

export class TraitStats extends Component {
    constructor(props){
        super(props);
        this.state = this.displayTraitStats();
    }
    componentDidUpdate = ( prevProps ) => {
        if(this.props.match.params.trait !== prevProps.match.params.trait){
            this.setState(this.displayTraitStats());
        }
    }
    displayTraitStats = () => {
        let id = this.props.match.params.trait;
        let unitComponentBuilder = TraitData[id].units.map(unitID => {
            return <Unit key={unitID} id={unitID} />
        });
        
        return ({
            traitComponent: <Trait key={id} id={id}/>,
            unitComponents: unitComponentBuilder
        });
    }
    render() {
        let s = this.state;
        return (
            <div className="traits-page">
                <Nav tab={'trait'}/>
                <div className="scrollable-list">
                    <div className="trait-stats--holder">
                        {s.traitComponent}
                        {s.unitComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default TraitStats;
