import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Items, Builds} from '../assets/ItemSets';
import BuiltItem from './BuiltItem';
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
        const s = this.state;
        return (
            <div className="item-stats--holder">
                <div className="built-item--holder">
                    <Link to='/items' className="back-button"> back </Link>
                    <div className="item-component--holder" style={{backgroundColor: '#dcdcdc'}}>
                        <img src={s.image} alt={s.name + " image"} />
                        <div className="item-component--name">{ s.name }</div>
                        <div className="item-component--stat">{ s.stat }</div>
                    </div>
                    {s.builds}
                </div>
            </div>
        )
    }
}

export default ItemStats;
