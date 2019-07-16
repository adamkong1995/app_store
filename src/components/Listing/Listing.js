import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppList, setPageNumber } from '../../actions';
import Pagination from './Pagination';

const ListItem = () => <div>ListItem</div>;

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
        return _.map(this.props.appList, ({artistName})=> {
            return <div>{artistName}</div>
        })
    }

    render() {
        return (
            <div>
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