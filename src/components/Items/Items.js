import React, { Component } from 'react';
import { TotalItems } from '../../assets/ItemSets';
import Item from './Item';
import BuiltItem from './BuiltItem';
import Nav from '../Nav/Nav';
import './Items.css';

export class Items extends Component {
    constructor(props){
        super(props);
        let itemComponents = [];
        for(let i = 0; i < TotalItems; i++){
            itemComponents.push( 
                i < 8 
                ? <Item key={i} id={i} index={i}/ >
                : <BuiltItem key={i} id={i} index={i} />
            );
        };
        this.state = {
            items: itemComponents
        };
    }
    render() {
        return (
            <div className="items-page">
                <Nav tab={'item'}/>
                <div className="scrollable-list">
                    <div className="items-list--holder">
                        {this.state.items}
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;
