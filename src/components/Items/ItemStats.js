import React, { Component } from 'react';
import {Items, Decompositions} from '../../assets/ItemSets';
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
        return id < 8 ? this.displayItemPaths(id) : this.displayBuiltItem(id);
    }
    displayItemPaths = (id) => {
        let itemBuildsList = [];
        Decompositions[id].forEach( e => {
            itemBuildsList.push(<BuiltItem key={e} id={e}/>);
        });
        return ({
            builds: itemBuildsList
        });
    }
    displayBuiltItem = (id) => {
        return ({
            builds: []
        });
    }

    render() {
        let s = this.state;
        return (
            <div className="items-page">
                <Nav tab={'item'}/>
                <div className="scrollable-list">
                    <div className="item-stats--holder">
                        {s.builds}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemStats;
