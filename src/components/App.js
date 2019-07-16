import React, { Component } from 'react';

import Recommendation from './recommendation/Recommendation'
import Listing from './listing/Listing';

import './App.css';

const Search = () => <div>Search</div>;



class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <Recommendation />
                <Listing />
            </div>
        )
    }
};

export default App;