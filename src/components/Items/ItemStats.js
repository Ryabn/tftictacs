import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Items, Builds} from '../../assets/ItemSets';
import BuiltItem from './BuiltItem';
import Nav from '../Nav/Nav';
import './Items.css';

export class ItemStats extends Component {
    constructor(props){
        super(props);
        this.state = this.displayItemStats();
    }
    componentDidUpdate = ( prevProps ) => {
        if(this.props.match.params.item !== prevProps.match.params.item){
            this.setState(this.displayItemStats());
        }
    }
    displayItemStats = () => {
        let id = this.props.match.params.item;
        let itemBuildsList = [];
        Builds[id].builds.forEach( (e, i) => {
            itemBuildsList.push(<BuiltItem key={e.intoItem * 100 + e.withItem} with={e.withItem} into={e.intoItem} index={i}/>);
        });
        return ({
            name: Items[id].name,
            stat: Items[id].stat,
            image: Items[id].image,
            builds: itemBuildsList
        });
    }
    render() {
        let s = this.state;
        return (
            <div className="items-page">
                <Nav tab={'item'}/>
                <div className="scrollable-list">
                    <div className="items-stats--holder">
                        {s.builds}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemStats;
