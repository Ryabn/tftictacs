import React, { Component } from 'react';
import {Units as UnitData, Traits as TraitData} from '../../assets/UnitSets';
import {Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Table, TableBody, TableRow, TableCell} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Link from '../DelayLink';
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
    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }
    getTraits = (s) => {
        return (
            <div className="unit-trait--holder">
            {s.origin.map(this.getTraitComponent).concat(s.class.map(this.getTraitComponent))}
            </div>
        );
    }
    getTraitComponent = (e) => {
        return (
            <Link key={e} to={`/traits/${e}`}>
                <img src={TraitData[e].image} alt="Trait Avatar" style={{backgroundColor: TraitData[e].color}} className="trait-avatar--mini"></img>
                {/* {TraitData[e].name} • */}
            </Link>
        );
    }
    render() {
        const s = this.state;
        return (
            <div className="unit-holder">
                <Card style={{position: 'relative'}}>
                {this.getTraits(s)}
                <CardHeader
                    avatar={
                        <Link to={`/units/${this.props.id}`}>
                            <img src={s.icon} alt="Champion Avatar" className="unit-avatar"></img>
                        </Link>
                    }
                    title={s.name}
                    subheader={s.cost + " Gold"}
                />
                <CardContent style={{padding: '0px 0 5px 16px'}}>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <i>{s.origin.map(e => {return TraitData[e].name}).concat(s.class.map(e => {return TraitData[e].name})).join(' | ')}</i>
                    </Typography>
                </CardContent>
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
                        <div className="unit-card--stats">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>DPS</TableCell>
                                        <TableCell align="right">{s.stats.dps.join(' / ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>DMG</TableCell>
                                        <TableCell align="right">{s.stats.damage.join(' / ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>AS</TableCell>
                                        <TableCell align="right">{s.stats.as}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Range</TableCell>
                                        <TableCell align="right">{s.stats.range === 1 ? '1 Hex' : s.stats.range + ' Hexes'}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Armor</TableCell>
                                        <TableCell align="right">{s.stats.armor}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>MR</TableCell>
                                        <TableCell align="right">{s.stats.mr}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Health</TableCell>
                                        <TableCell align="right">{s.stats.health.join(' / ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crit %</TableCell>
                                        <TableCell align="right">{s.stats.critChance}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Collapse>
                </Card>
            </div>
        )
    }
}
// stats: {
//     health: [600, 1080, 2160],
//     dps: 25,
//     as:	0.5,
//     damage:	50,
//     range:	1,
//     armor: 25,
//     mr:	20
// }

export default Unit;
