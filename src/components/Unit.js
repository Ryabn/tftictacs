import React, { Component } from 'react';
import {Units as UnitData} from '../assets/UnitSets';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './Units.css';

export class Unit extends Component {
    constructor(props){
        super(props);
        let data = UnitData[this.props.id];
        this.state = {
            expanded: false,
            ...data
        }
    }
    getStats = () => {
        
        return ("stats");
    }
    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }
    render() {
        const s = this.state;
        return (
            <div className="unit-holder">
                <Card>
                <CardHeader
                    avatar={<img src={s.icon} alt="Champion Avatar" className="unit-avatar"></img>}
                    title={s.name}
                    subheader={s.cost + " Gold"}
                />
                <CardContent style={{padding: '0 0 0 16px'}}>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <i>{ s.origin.join(' / ') + ' / ' + s.class.join( ' / ') }</i>
                    </Typography>
                </CardContent>
                {/* <CardMedia
                    className="unit-splash"
                    image={s.splash}
                    title={s.name + " splash art"}
                /> */}
                <CardContent style={{padding: '10px 16px 0 16px', textAlign: 'justify'}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {s.ability}
                    </Typography>
                </CardContent>
                <CardActions style={{padding: '0'}}>
                    <IconButton
                        onClick={this.handleExpandClick}
                        aria-expanded={s.expanded}
                        aria-label="Show stats"
                    >
                    { s.expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </IconButton>
                    Stats
                </CardActions>
                <Collapse in={s.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {this.getStats()}
                    </CardContent>
                </Collapse>
                </Card>
            </div>
        )
    }
}

export default Unit;
