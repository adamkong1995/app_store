import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppList, setPageNumber } from '../../actions';

import ListItem from './ListItem';
import Pagination from './Pagination';

import { FaSpinner } from 'react-icons/fa';

import './Listing.css';

class Listing extends Component {
    componentDidMount() {
        this.props.fetchAppList(this.props.pageNum);
    };

    componentDidUpdate(prev) {
        if(prev.pageNum !== this.props.pageNum) {
            this.props.fetchAppList(this.props.pageNum);
        };
        if(prev.keyword !== this.props.keyword) {
            this.props.fetchAppList(this.props.pageNum, this.props.keyword);
            this.props.setPageNumber('set', 1);
        };
    };

    renderItem () {
        //Display loading indicator when fetching data
        if (this.props.appList.length === 0 ){
            return <FaSpinner />
        };
        return _.map(this.props.appList, ({artworkUrl512, trackName, primaryGenreName, averageUserRating, userRatingCount, ranking})=> {
            return <ListItem icon={artworkUrl512} name={trackName} genre={primaryGenreName} rating={averageUserRating} userCount={userRatingCount} ranking={ranking} />
        });
    };

    render() {
        return (
            <div className='listing'>
                {this.renderItem()}
                <Pagination setPageNumber={this.props.setPageNumber}/>
            </div>
        );
    };
};

const mapStateToProps = ({ appList, pageNum, keyword }) => {
    return { appList, pageNum, keyword };
};

export default connect(mapStateToProps, { fetchAppList, setPageNumber })(Listing);