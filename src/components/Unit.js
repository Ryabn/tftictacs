import React, { Component } from 'react';
import {Units as UnitData} from '../assets/UnitSets';
import {Card, CardHeader, Avatar, CardMedia, CardContent, Typography} from '@material-ui/core';
import './Units.css';

export class Unit extends Component {
    constructor(props){
        super(props);
        let data = UnitData[this.props.id];
        this.state = {
            ...data
        }
    }
    render() {
        const s = this.state;
        return (
            <div className="unit-holder">
                <Card>
                <CardHeader
                    avatar={
                    <Avatar aria-label="Recipe" >
                        
                    </Avatar>
                    }
                    title={s.name}
                    subheader={s.cost + " Gold"}
                />
                <CardMedia
                    image={s.splash}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default Unit;
