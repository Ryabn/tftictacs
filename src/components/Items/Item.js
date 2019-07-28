import React, { Component } from 'react';
import { Items } from '../../assets/ItemSets';
import {Card, CardHeader} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Items.css';

export class Item extends Component {
    constructor(props){
        super(props);
        let id = this.props.id;
        this.state = {
            name: Items[id].name,
            image: Items[id].image,
            stat: Items[id].stat,
            index: this.props.index
        };
    }
    render() {
        const s = this.state;
        return (
            <Link to={'/items/' + this.props.id} className="item-component--holder">
                <Card>
                <CardHeader
                    avatar={ 
                        <img src={s.image} alt="Item Avatar" className="item-avatar"></img>
                    }
                    title={s.name}
                    subheader={s.stat}
                />
                </Card>
            </Link>            
        );
    }
}

export default Item;
