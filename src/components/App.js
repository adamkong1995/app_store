import React, { Component } from 'react';

import Listing from './Listing/Listing';

const Search = () => <div>Search</div>;
const Recommendation = () => <div>Recommendation</div>;


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