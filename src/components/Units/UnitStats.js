import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Unit from './Unit';
import {Traits as TraitData} from '../../assets/UnitSets';
import './Units.css';

export class UnitStats extends Component {
    constructor(props){
        super(props);
        this.state = this.displayUnitStats();
    }
    componentDidUpdate = ( prevProps ) => {
        if(this.props.match.params.item !== prevProps.match.params.item){
            this.setState(this.displayUnitStats());
        }
    }
    displayUnitStats = () => {
        let id = this.props.match.params.item;
        let traitComponentBuilder = []
        // Builds[id].builds.forEach( (e, i) => {
        //     itemBuildsList.push(<BuiltItem key={e.intoItem * 100 + e.withItem} with={e.withItem} into={e.intoItem} index={i}/>);
        // });
        return ({
            unitComponent: <Unit key={id} id={id}/>,
            traitComponents: traitComponentBuilder
        });
    }
    render() {
        let s = this.state;
        return (
            <div>
                <Nav />
                {s}
            </div>
        )
    }
}

export default UnitStats;
