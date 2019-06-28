import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import ItemStats from './components/ItemStats';
import Units from './components/Units';
import UnitStats from './components/UnitStats';
import './App.css';

function App() {
    return (
        <div>
            <Route exact strict path='/' component={Home} />
            <Route exact path='/items' component={Items} />
            <Route exact path='/items/:item' component={ItemStats} />
            <Route exact path='/units' component={Units} />
            <Route exact path='/units/:unit' component={UnitStats} />
        </div>
    );
}

export default App;
