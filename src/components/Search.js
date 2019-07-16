import React from 'react';
import { connect } from 'react-redux';

import { updateSearchBar } from '../actions';

import './Search.css';

const Search = props => {
    return (
        <div className='search'>
            <input placeholder='Search' value={props.keyword} onChange={e=>props.updateSearchBar(e.target.value)} />
        </div>
    )
};

const mapStateToProps = ({ keyword }) => {
    return { keyword }
};

export default connect(mapStateToProps, { updateSearchBar })(Search);