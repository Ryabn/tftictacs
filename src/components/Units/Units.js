import React, { Component } from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, Switch, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Collapse} from '@material-ui/core';
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
            filterDialog: false,
            filterLevel: '1',
            showFilterLevel: false
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
                switch(this.state.filterLevel){
                    case '1':
                        unitList = USortByHealth;
                        break;
                    case '2':
                        unitList = USortByHealth2;
                        break;
                    case '3':
                        unitList = USortByHealth3;
                        break;
                    default: 
                        unitList = USortByHealth;
                        break;
                }
                break;
            case 5:
                unitList = USortByRange;
                break;
            case 6:
                unitList = USortByArmor;
                break;
            case 7:
                unitList = USortByMR;
                break;
            case 8:
                unitList = USortByManaCost;
                break;
            case 9:
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
        if( event.target.value === 2 ||
            event.target.value === 3 ||
            event.target.value === 4
        ){
            this.setState({showFilterLevel: true});
        }else{
            this.setState({showFilterLevel: false});
        }
        this.setState({ filterItem: event.target.value });
    };
    changeOrder = () => {
        this.setState(state => ({
            filterOrder: !state.filterOrder
        }));
    }
    changeLevel = (event) => {
        this.setState({filterLevel: event.target.value});
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
                        <MenuItem value={4}>Health</MenuItem>
                        <MenuItem value={5}>Range</MenuItem>
                        <MenuItem value={6}>Armor</MenuItem>
                        <MenuItem value={7}>Magic Resist</MenuItem>
                        <MenuItem value={8}>Mana Cost</MenuItem>
                        <MenuItem value={9}>Starting Mana</MenuItem>
                    </Select>
                    <Collapse in={s.showFilterLevel} className="unit-level--select" >
                    <FormControl component="fieldset" style={{width: '100%'}}>
                        <FormLabel component="legend">Unit Level</FormLabel>
                        <RadioGroup
                            aria-label="position"
                            name="position"
                            value={s.filterLevel}
                            className="unit-level-radio--holder"
                            onChange={this.changeLevel}
                            row
                        >
                            <FormControlLabel
                            value={'1'}
                            control={<Radio />}
                            label='1'
                            labelPlacement="bottom"
                            style={{margin: '0'}}
                            />
                            <FormControlLabel
                            value='2'
                            control={<Radio />}
                            label='2'
                            labelPlacement="bottom"
                            style={{margin: '0'}}
                            />
                            <FormControlLabel
                            value='3'
                            control={<Radio />}
                            label='3'
                            labelPlacement="bottom"
                            style={{margin: '0'}}
                            />
                        </RadioGroup>
                        </FormControl>
                    </Collapse>
                    Reverse Order
                    <Switch checked={s.filterOrder} onClick={this.changeOrder} style={{justifySelf: 'end'}}/>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.applyFilterAndCloseDialog}>
                    Filter
                </Button>
                <Button onClick={this.closeDialog}>
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
        );
    }
}

export default Units;
