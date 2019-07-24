import React, { Component } from 'react';
import { Units as UnitData } from '../../assets/UnitSets';
import {Card, Paper, Container, Typography} from '@material-ui/core';
import Unit from './Unit';
import Nav from '../Nav/Nav';
import './Units.css';

export class Units extends Component {
    constructor(props){
        super(props);
        let unitObjects = []
        UnitData.forEach( e => {
            unitObjects.push(<Unit key={e.id} id={e.id}/>);
        });
        this.state = {
            units: unitObjects,
        }
    }
    render() {
        const s = this.state;
        return (
            <div className="units-page">
                <Nav tab={'unit'}/>
                <div className="scrollable-list">
                    <div className="units-list--holder">
                        <Card className="units-controls--holder">
                            <Typography variant="h6" component="div">Sort by:</Typography>
                            <div className="units-sort-by--holder">
                                <div>
                                    <Typography variant="h6" component="div"> DPS </Typography>
                                    <Typography variant="subtitle2" component="div"> Damage per Second </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> DMG </Typography>
                                    <Typography variant="subtitle2" component="div"> Damage </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> AS </Typography>
                                    <Typography variant="subtitle2" component="div"> Attack Speed </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> Start Mana </Typography>
                                    <Typography variant="subtitle2" component="div"> Starting Mana </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> Mana Cost </Typography>
                                    <Typography variant="subtitle2" component="div"> Spell Mana Cost </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> Range </Typography>
                                    <Typography variant="subtitle2" component="div"> Basic attack range </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> Armor </Typography>
                                    <Typography variant="subtitle2" component="div"> Physical damage reduction </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> MR </Typography>
                                    <Typography variant="subtitle2" component="div"> Magic damage reduction </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6" component="div"> Health </Typography>
                                    <Typography variant="subtitle2" component="div"> Total HP at level 1 </Typography>
                                </div>
                            </div>
                        </Card>
                        {s.units}
                    </div>
                </div>
            </div>
        )
    }
}

export default Units;
