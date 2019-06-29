import React, { Component } from 'react';
import { Items } from '../assets/ItemSets';
import { Link } from 'react-router-dom';
import './Items.css';

export class BuiltItem extends Component {
    constructor(props){
        super(props);
        let id1 = this.props.with;
        let id2 = this.props.into;
        this.state = {
            with: {
                name: Items[id1].name,
                image: Items[id1].image
            },
            into: {
                name: Items[id2].name,
                image: Items[id2].image,
                stat: Items[id2].stat
            },
            index: this.props.index
        };
    }
    alternateColor = (index) => {
        return { backgroundColor: index % 2 ? '#f5f5f5' : '#ebebeb' };
    }
    render() {
        const s = this.state;
        const linkTo = '/items/' + this.props.with + '/';
        return (
            <div className="built-item-component--holder" style={ this.alternateColor(s.index) }>
                <div className="built-item--path">
                    <div> with </div>
                    <Link to={linkTo}>
                        <img src={s.with.image} alt={s.with.name + " image"} />
                    </Link>
                    <div> = </div>
                </div>
                <img src={s.into.image} alt={s.into.name + " image"} />
                <div className="built-item-component--name">{ s.into.name }</div>
                <div className="built-item-component--stat">{ s.into.stat }</div>
            </div>
        )
    }
}

export default BuiltItem;
