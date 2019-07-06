import React, { Component } from 'react';
import {Traits as TraitData, Units as UnitData} from '../assets/UnitSets';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import './Units.css';

export class Trait extends Component {
    constructor(props){
        super(props);
        let data = TraitData[this.props.id];
        this.state = {
            ...data
        }
    }
    displayBonuses = (s) => {
        return (
            <div key={s.id} className="trait-bonus--table">
                {s.bonus.map(e => {
                    return [
                        <div>
                            <b>
                            {e.count}
                            </b>
                        </div>,
                        <div style={{textAlign: 'justify'}}>
                            {e.text}
                        </div>
                    ];
                })}
            </div>
        )
    }
    displayUnits = (s) => {
        return s.units.map( e => {
            return <div className="trait-unit--icon" style={{backgroundImage: `url('${UnitData[e].icon}')`}}></div>;
        });
    }
    render() {
        const s = this.state;
        return (
            <div className="trait-holder">
                <Card>
                <CardHeader
                    avatar={<img src={s.image} alt="Champion Avatar" style={{backgroundColor: s.color}} className="trait-avatar"></img>}
                    title={s.name}
                    subheader={s.text}
                />
                <CardContent style={{padding: '10px 16px 0 16px', textAlign: 'justify'}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.displayBonuses(s)}
                    </Typography>
                    <div className="trait-unit--holder">
                        {this.displayUnits(s)}
                    </div>
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default Trait;
