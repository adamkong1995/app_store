import React, { Component } from 'react';

import Search from './Search';
import Recommendation from './recommendation/Recommendation'
import Listing from './listing/Listing';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <Recommendation />
                <Listing />
            </div>
        );
    };
};

export default App;