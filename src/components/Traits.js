import React, { Component } from 'react';
import { Traits as TraitData } from '../assets/UnitSets';
import Trait from './Trait';
import './Units.css';

export class Traits extends Component {
    constructor(props){
        super(props);
        let traitObjects = [];
        TraitData.forEach( e => {
            traitObjects.push(<Trait key={e.id} id={e.id}/>);
        });
        this.state = {
            traits: traitObjects
        }
    }
    render() {
        const s = this.state;
        return (
            <div className="traits-list-holder">
                {s.traits}
            </div>
        )
    }
}

export default Traits;
