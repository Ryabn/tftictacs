import React, { Component } from 'react';
import {Units as UnitData} from '../assets/UnitSets';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material'
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
                    avatar={<img src={s.icon} alt="Champion Splash" className="unit-avatar"></img>}
                    title={s.name}
                    subheader={s.cost + " Gold"}
                />
                <CardMedia
                    className="unit-splash"
                    image={s.splash}
                    title={s.name + " splash art"}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {s.ability}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
                </Collapse>
                </Card>
            </div>
        )
    }
}

export default Unit;
