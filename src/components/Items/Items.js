import React, { Component } from 'react';
import { BaseItems } from '../../assets/ItemSets';
import { Link } from 'react-router-dom';
import Item from './Item';
import './Items.css';

export class Items extends Component {
    constructor(props){
        super(props);
        let itemComponents = [];
        BaseItems.forEach( (e, i) => {
            itemComponents.push( <Item key={e.id} id={e.id} index={i}/> );
        });
        this.state = {
            items: itemComponents
        };
    }
    render() {
        return (
            <div className="base-item--holder">
                <Link to='/' className="back-button"> back </Link>
                {this.state.items}
            </div>
        )
    }
}

export default Items;
