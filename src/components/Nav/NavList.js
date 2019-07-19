import React, { Component } from 'react';
import {List, ListItem, ListSubheader, ListItemText, Collapse} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { USortByName, TSortByName, ISortByName } from '../../assets/SortedSets';
import Link from '../DelayLink';
import './Nav.css';

export class NavList extends Component {
    constructor(props){
        super(props);
        let tabColor;
        switch(this.props.tab){
            case 'unit':
                tabColor = 'linear-gradient(135deg, rgba(255,153,102, 0.5), rgba(255,94,98, 0.5))';
                break;
            case 'trait':
                tabColor = 'linear-gradient(135deg, rgba(54,209,220, 0.5), rgba(91,134,229, 0.5))';
                break;
            case 'item':
                tabColor = 'linear-gradient(135deg, rgba(127,0,255, 0.4), rgba(225,0,255, 0.4))';
                break;
            default:
                tabColor = 'white';
                break;
        }
        this.state = {
            items: false,
            units: false,
            traits: false,
            color: tabColor
        }
    }
    toggleList = (open) => {
        this.setState(state => ({[open]: !state[open]}));
    }
    getCostColor = (cost) => {
        switch(cost){
            case 1:
                return '#A0A1A3';
            case 2:
                return '#27AF55';
            case 3:
                return '#23C6E0';
            case 4:
                return '#B177E8';
            case 5:
                return '#EEBC52';
            default:
                return 'white';
        }
    }
    getListItems = () => {
        return ISortByName.map(item => {
            return (
                <Link key={item.id} to={`/items/${item.id}`}>
                    <ListItem button>
                        {item.name}
                    </ListItem>
                </Link>
            );
        });
    }
    getListUnits = () => {
        return USortByName.map(unit => {
            return (
                <Link key={unit.id} to={`/units/${unit.id}`}>
                    <ListItem button>
                        <span style={{fontSize: '30px', color: this.getCostColor(unit.cost)}}> • </span>&#160;&#160;{unit.name}
                    </ListItem>
                </Link>
            );
        });
    }
    getListTraits = () => {
        return TSortByName.map(trait => {
            return (
                <Link key={trait.id} to={`/traits/${trait.id}`}>
                    <ListItem button>
                        <span style={{fontSize: '30px', color: trait.color}}> • </span>&#160;&#160;{trait.name}
                    </ListItem>
                </Link>
            );
        });
    }
    render() {
        let s = this.state;
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <Link to='/' delay={0}>
                        <ListSubheader component="div" style={{background: s.color}} id="nested-list-subheader">
                            TFT • Help
                        </ListSubheader>
                    </Link>
                }
                className="nav-list--holder"
                >
                <ListItem button className="nav-list--header" onClick={() => this.toggleList('items')}>
                    <ListItemText primary="Items" />
                    {s.items ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={s.items} timeout="auto" unmountOnExit>
                    <List className="nav-list--nested" component="div" disablePadding>
                        <Link delay={0} to='/items'>
                            <ListItem button>
                                    All Items
                            </ListItem>
                        </Link>
                        {this.getListItems()}
                    </List>
                </Collapse>

                <ListItem button className="nav-list--header" onClick={() => this.toggleList('traits')} >
                    <ListItemText primary="Traits" />
                    {s.traits ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={s.traits} timeout="auto" unmountOnExit>
                    <List className="nav-list--nested" component="div" disablePadding>
                        <Link delay={0} to='/traits'>
                            <ListItem button>
                                All Traits
                            </ListItem>
                        </Link>
                        {this.getListTraits()}
                    </List>
                </Collapse>

                <ListItem button className="nav-list--header" onClick={() => this.toggleList('units')} >
                    <ListItemText primary="Units" />
                    {s.units ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={s.units} timeout="auto" unmountOnExit>
                    <List className="nav-list--nested" component="div" disablePadding>
                        <Link delay={0} to='/units'>
                            <ListItem button>
                                All Units
                            </ListItem>
                        </Link>
                        {this.getListUnits()}
                    </List>
                </Collapse>
                <div className="legal-jibber-jabber">
                    tft.help was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
                </div>
            </List>
        )
    }
}

export default NavList;
