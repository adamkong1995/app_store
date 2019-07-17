import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecommendedList } from '../../actions';

import Item from './Item';

import './Recommendation.css';

class Recommendation extends Component {
    componentDidMount() {
        this.props.fetchRecommendedList();
    };

    componentDidUpdate(prev) {
        // If user entered new keywords, then fetch records for that keywords
        if(prev.keyword !== this.props.keyword) {
            this.props.fetchRecommendedList(this.props.keyword);
        };
    };

    renderList() {
        return _.map(this.props.recommended, ({name, icon, genre}) => {
            return (
                <li>
                    <Item name={name} icon={icon} genre={genre} />
                </li> 
            );
        });
    };

    render() {
        return (
            <div className='recommendation'>
                <h3>Recommendation</h3>
                <ul>
                    {this.renderList()}
                </ul>
                
            </div>
        );
    };
};

const mapStateToProps = ({ recommended, keyword }) => {
    return { recommended, keyword };
};

export default connect(mapStateToProps, { fetchRecommendedList })(Recommendation);