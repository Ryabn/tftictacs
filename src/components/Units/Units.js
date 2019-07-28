import React, { Component } from 'react';
import { Units as UnitData } from '../../assets/UnitSets';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, Switch} from '@material-ui/core';
import {USortByAS, USortByArmor, USortByDMG, USortByDPS, USortByHealth, USortByHealth2, USortByHealth3, USortByMR, USortByRange, USortByManaCost, USortByStartingMana, USortByName} from '../../assets/SortedSets';
import TuneIcon from '@material-ui/icons/TuneRounded';
import Unit from './Unit';
import Nav from '../Nav/Nav';
import './Units.css';

export class Units extends Component {
    constructor(props){
        super(props);
        let unitObjects = []
        USortByName.forEach( e => {
            unitObjects.push(<Unit key={e.id} id={e.id} />);
        });
        this.state = {
            units: unitObjects,
            filterItem: 0,
            filterOrder: false,
            filterDialog: false
        }
    }
    closeDialog = () => {
        this.setState({filterDialog: false});
    }
    applyFilterAndCloseDialog = () => {
        let unitList;
        switch(this.state.filterItem){
            case 1:
                unitList = USortByAS;
                break;
            case 2:
                unitList = USortByDPS;
                break;
            case 3:
                unitList = USortByDMG;
                break;
            case 4:
                unitList = USortByHealth;
                break;
            case 5:
                unitList = USortByHealth2;
                break;
            case 6:
                unitList = USortByHealth3;
                break;
            case 7:
                unitList = USortByRange;
                break;
            case 8:
                unitList = USortByArmor;
                break;
            case 9:
                unitList = USortByMR;
                break;
            case 10:
                unitList = USortByManaCost;
                break;
            case 11:
                unitList = USortByStartingMana;
                break;
            default: 
                unitList = USortByName.map(e => {return e.id});
                break;
        }
        let unitObjects = [];
        if(this.state.filterOrder){
            for(let i = unitList.length - 1; i >= 0; i--){
                let unitid = unitList[i];
                unitObjects.push(<Unit key={unitid} id={unitid} />);
            }
        }else{
            unitList.forEach( e => {
                unitObjects.push(<Unit key={e} id={e} />);
            });
        }
        this.setState({units: unitObjects}, this.closeDialog);
    }
    handleChange = (event) => {
        this.setState({ filterItem: event.target.value });
    };
    changeOrder = () => {
        this.setState(state => ({
            filterOrder: !state.filterOrder
        }));
    }
    render() {
        const s = this.state;
        return (
            <div className="units-page">
                <Nav tab={'unit'}/>
                <Dialog open={s.filterDialog} onClose={this.closeDialog}>
                    <DialogTitle> Filter Units </DialogTitle>
                    <DialogContent className="units-sort-by--holder">
                        Sort By
                        <Select
                            value={s.filterItem}
                            onChange={this.handleChange}
                            style={{overflowX: 'hidden'}}
                            >
                            <MenuItem value={0}>Alphabetical</MenuItem>
                            <MenuItem value={1}>Attack Speed</MenuItem>
                            <MenuItem value={2}>Damage Per Second</MenuItem>
                            <MenuItem value={3}>Damage</MenuItem>
                            <MenuItem value={4}>Health @ 1</MenuItem>
                            <MenuItem value={5}>Health @ 2</MenuItem>
                            <MenuItem value={6}>Health @ 3</MenuItem>
                            <MenuItem value={7}>Range</MenuItem>
                            <MenuItem value={8}>Armor</MenuItem>
                            <MenuItem value={9}>Magic Resist</MenuItem>
                            <MenuItem value={10}>Mana Cost</MenuItem>
                            <MenuItem value={11}>Starting Mana</MenuItem>
                        </Select>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">labelPlacement</FormLabel>
                            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
                                <FormControlLabel
                                value="top"
                                control={<Radio color="primary" />}
                                label="Top"
                                labelPlacement="top"
                                />
                                <FormControlLabel
                                value="start"
                                control={<Radio color="primary" />}
                                label="Start"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                value="bottom"
                                control={<Radio color="primary" />}
                                label="Bottom"
                                labelPlacement="bottom"
                                />
                                <FormControlLabel
                                value="end"
                                control={<Radio color="primary" />}
                                label="End"
                                labelPlacement="end"
                                />
                            </RadioGroup>
                            </FormControl>
                        Reverse Order
                        <Switch checked={s.filterOrder} onClick={this.changeOrder} style={{justifySelf: 'end',}}/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.applyFilterAndCloseDialog} color="primary">
                        Filter
                    </Button>
                    <Button onClick={this.closeDialog} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
                <div className="scrollable-list">
                    <div className="units-list--holder">
                        <div className="units-sort-by--trigger">
                        <Button 
                            variant="outlined"
                            onClick={() => {this.setState({filterDialog: true})}}
                            style={{borderColor: '#47006b',
                                    color: '#47006b'}}    
                        >
                            Filter
                            <TuneIcon style={{marginLeft: '10px'}}/>
                        </Button>
                        </div>
                        {s.units}
                    </div>
                </div>
            </div>
        )
    }
}

export default Units;
