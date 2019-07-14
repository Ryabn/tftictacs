import React, { Component } from 'react';
import {Traits as TraitData, Units as UnitData} from '../../assets/UnitSets';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import Link from '../DelayLink';
import './Traits.css';

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
                {s.bonus.map(bonus => {
                    return( 
                        <div key={bonus.count}>
                            <b>[{bonus.count}] </b>
                            {bonus.text}
                        </div>
                    );
                })}
            </div>
        )
    }
    displayUnits = (s) => {
        return s.units.map( e => {
            return (
                <Link key={e} to={`/units/${e}`}>
                    <div className="trait-unit--icon" style={{backgroundImage: `url('${UnitData[e].icon}')`}}></div>
                </Link>
            );
        });
    }
    render() {
        const s = this.state;
        return (
            <div className="trait-holder">
                <Card>
                <CardHeader
                    avatar={ 
                        <Link to={`/traits/${s.id}`}>
                            <img src={s.image} alt="Trait Avatar" style={{backgroundColor: s.color}} className="trait-avatar"></img>
                        </Link>
                    }
                    title={s.name}
                    subheader={s.text}
                />
                <CardContent style={{padding: '10px 16px 0 16px', textAlign: 'justify'}}>
                    <Typography variant="body2" color="textSecondary" component="div">
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
