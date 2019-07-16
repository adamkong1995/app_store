import React from 'react';
import './ListItem.css';

import fullStar from './fullStar.png';
import halfStar from './halfStar.png';
import emptyStar from './emptyStar.png';

const ListItem = ({ icon, name, genre, rating, userCount, ranking }) => {
    return (
        <div className='container'>
            <div>{ranking}</div>
            <img className={isOdd(ranking) ? 'odd': 'even'} src={icon} alt='icon' width='100' height='100'/>
            <div>
                <div className='appName'>{name}</div>
                <div className='genre'>{genre}</div>
                <div>{renderStar(rating)}{`(${userCount})`}</div>
            </div>
        </div>
    );
};

const isOdd = n => n % 2 === 0;

const renderStar = rating => {
    let star = [];
    let count = 0;
    let isHalfPoint = false;

    if(!Number.isInteger(rating)) {
        rating--;
        isHalfPoint = true;
    };

    while (count < 5) {
        if(count < rating) {
            star.push(<img src={fullStar} alt='star' width='15' />);
        } else if (isHalfPoint) {
            star.push(<img src={halfStar} alt='half' width='15' />);
            isHalfPoint = false;
        } else if (count >= rating) {
            star.push(<img src={emptyStar} alt='empty' width='15' />);
        }
        count++;
    };

    return star;
}

export default ListItem;