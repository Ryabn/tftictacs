import React, { Component } from 'react';
import { Items, Compositions } from '../../assets/ItemSets';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import './Items.css';

export class BuiltItem extends Component {
    constructor(props){
        super(props);
        let id = this.props.id;
        this.state = {
            name: Items[id].name,
            image: Items[id].image,
            stat: Items[id].stat,
            index: this.props.index,
            buildPath: this.getBuildPath(id),
            buildPathAvatar: this.getBuildItems(id)
        };
    }
    alternateColor = (index) => {
        return { backgroundColor: index % 2 ? '#f5f5f5' : '#ebebeb' };
    }
    getBuildPath = (id) => {
        return (
            <div className="built-item--path">
                <i>{Items[Compositions[id][0]].name} + {Items[Compositions[id][1]].name}</i>
            </div>
        );
    }
    getBuildItems = (id) => {
        return (
            <div className="built-item-path--holder">
                {this.getBuildItemAvatar(Compositions[id][0])}
                {this.getBuildItemAvatar(Compositions[id][1])}
            </div>
        );
    }
    getBuildItemAvatar = (id) => {
        return (
        <Link to={`/items/${id}`}>
            <img
                src={Items[id].image}
                alt={`Link to ${Items[id].name}`}
                // style={{backgroundColor: Items[id].color}}
                className="item-avatar--mini" />
        </Link>
        );
    }
    render() {
        const s = this.state;
        return (
            <Link to={'/items/' + this.props.id} className="item-component--holder">
                <Card style={{position: 'relative'}}>
                {s.buildPathAvatar}
                <CardHeader
                    avatar={ 
                        <img src={s.image} alt="Item Avatar" className="item-avatar"></img>
                    }
                    title={s.name}
                    style={{
                        paddingLeft: '20px'
                    }}
                    subheader={s.buildPath}
                />
                <CardContent style={{padding: '10px 16px 16px 16px', textAlign: 'justify'}}>
                    <Typography variant="body2" color="textSecondary" component="div">
                        {s.stat}
                    </Typography>
                </CardContent>
                </Card>
            </Link>    
        )
    }
}

export default BuiltItem;
