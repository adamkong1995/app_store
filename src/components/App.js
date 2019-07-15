import React, { Component } from 'react';

const Search = () => <div>Search</div>;
const Recommendation = () => <div>Recommendation</div>;
const Listing = () => <div>Listing</div>;

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