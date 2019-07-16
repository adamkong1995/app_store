import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRecommendedList } from '../../actions';

import Item from './Item'

import './Recommendation.css';

class Recommendation extends Component {
    componentDidMount() {
        this.props.fetchRecommendedList();
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
            <div>
                <h3>Recommendation</h3>
                <ul>
                    {this.renderList()}
                </ul>
                
            </div>
        );
    };
};

const mapStateToProps = ({ recommended }) => {
    return { recommended };
};

export default connect(mapStateToProps, { fetchRecommendedList })(Recommendation);