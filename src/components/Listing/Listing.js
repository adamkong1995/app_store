import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppList } from '../../actions';
import Pagination from './Pagination';

const ListItem = () => <div>ListItem</div>;

class Listing extends Component {
    componentDidMount() {
        this.props.fetchAppList(1);
    }

    renderItem () {
        return _.map(this.props.appList, ({artistName})=> {
            return <div>{artistName}</div>
        })
    }

    render() {
        return (
            <div>
                {this.renderItem()}
                <Pagination />
            </div>
        );
    };
};

const mapStateToProps = ({ appList }) => {
    return { appList };
};

export default connect(mapStateToProps, { fetchAppList })(Listing);