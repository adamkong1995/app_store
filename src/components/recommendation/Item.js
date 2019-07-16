import React from 'react';
import './Item.css';

const Item = ({ name, icon, genre }) => {
    return (
        <div className='item'>
            <img src={icon} alt='icon' width='100' height='100' />
            <div className='appName'>{name}</div>
            <div className='genre'>{genre}</div>
        </div>
    );
};

export default Item;