import React from 'react';
import { connect } from 'react-redux';

import './Pagination.css';

const Pagination = ({ pageNum, setPageNumber }) => {
    return (
        <div className='pagination'>
            <button onClick={()=>setPageNumber('subtract', pageNum)}>Previous</button>
            {renderButton(setPageNumber)}
            <button onClick={()=>setPageNumber('add', pageNum)}>Next</button>
        </div>
    );
};

const renderButton = setPageNumber => {
    const button = [];
    for(let i=1; i < 11; i++) {
        button.push(<button key={i} onClick={()=>setPageNumber('set', i)}>{i}</button>)
    };
    return button;
};

const mapStateToProps = ({ pageNum }) => {
    return { pageNum };
};

export default connect(mapStateToProps, { })(Pagination);