import React, { Component } from 'react';
import { Units as UnitData } from '../../assets/UnitSets';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, Switch} from '@material-ui/core';
import TuneIcon from '@material-ui/icons/TuneRounded';
import Unit from './Unit';
import Nav from '../Nav/Nav';
import './Units.css';

export class Units extends Component {
    constructor(props){
        super(props);
        let unitObjects = []
        UnitData.forEach( e => {
            unitObjects.push(<Unit key={e.id} id={e.id} />);
        });
        this.state = {
            units: unitObjects,
            filterDialog: false
        }
    }
    closeDialog = () => {
        this.setState({filterDialog: false});
    }
    applyFilterAndCloseDialog = () => {

        this.closeDialog();
    }
    render() {
        const s = this.state;
        return (
            <div className="units-page">
                <Nav tab={'unit'}/>
                <Dialog open={s.filterDialog} onClose={this.closeDialog}>
                    <DialogTitle>Filter Units</DialogTitle>
                    <DialogContent className="units-sort-by--holder">
                        Sort By
                        <Select
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        Reverse Order
                        <Switch checked={false} />
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
