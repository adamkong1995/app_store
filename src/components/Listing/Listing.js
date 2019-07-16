import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppList, setPageNumber } from '../../actions';

import ListItem from './ListItem';
import Pagination from './Pagination';

class Listing extends Component {
    componentDidMount() {
        this.props.fetchAppList(this.props.pageNum);
    }

    componentDidUpdate(prev) {
        if(prev.pageNum !== this.props.pageNum) {
            this.props.fetchAppList(this.props.pageNum);
        }
    }

    renderItem () {
        return _.map(this.props.appList, ({artworkUrl512, trackName, primaryGenreName, averageUserRating, userRatingCount, ranking})=> {
            return <ListItem icon={artworkUrl512} name={trackName} genre={primaryGenreName} rating={averageUserRating} userCount={userRatingCount} ranking={ranking} />
        });
    };

    render() {
        return (
            <div style={{"overflow-y": "scroll", "height":"600px"}}>
                {this.renderItem()}
                <Pagination setPageNumber={this.props.setPageNumber}/>
            </div>
        );
    };
};

const mapStateToProps = ({ appList, pageNum }) => {
    return { appList, pageNum };
};

export default connect(mapStateToProps, { fetchAppList, setPageNumber })(Listing);