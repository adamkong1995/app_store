import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppApi, fetchRecommendedApi, fetchAppList, fetchRecommendedList } from '../actions';

import Search from './Search';
import Recommendation from './recommendation/Recommendation'
import Listing from './listing/Listing';

import './App.css';

class App extends Component {
    async componentDidMount() {
        await this.props.fetchAppApi();
        await this.props.fetchRecommendedApi();
        await this.props.fetchAppList(1);
        await this.props.fetchRecommendedList();
    };

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

export default connect(null, { fetchAppApi, fetchRecommendedApi, fetchAppList, fetchRecommendedList })(App);