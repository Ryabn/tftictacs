import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items/Items';
import ItemStats from './components/Items/ItemStats';
import Units from './components/Units/Units';
import UnitStats from './components/Units/UnitStats';
import Traits from './components/Traits/Traits';
import './App.css';

function App() {
    return (
        <div>
            <div className="not-jibber-jabber">
                <Route exact strict path='/' component={Home} />
                <Route exact path='/items' component={Items} />
                <Route exact path='/items/:item' component={ItemStats} />
                <Route exact path='/traits' component={Traits} />
                <Route exact path='/traits/:trait' component={ItemStats} />
                <Route exact path='/units' component={Units} />
                <Route exact path='/units/:unit' component={UnitStats} />
            </div>
            <div className="legal-jibber-jabber">
                tft.help was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
            </div>
        </div>
    );
}

export default App;
