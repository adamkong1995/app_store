import axios from 'axios';
import appList from '../data/top100'

import { FETCH_APP_LIST, SET_CURRENT_PAGE, ADD_CURRENT_PAGE, SUBTRACT_CURRENT_PAGE } from './types';

export const fetchAppList = page => async dispatch => {
    const res = appList.feed.results;
    let maxIndex = (page * 10);
    let minIndex = maxIndex - 10;
    const apps = res.slice(minIndex, maxIndex)

    const appDetails = [];

    for(let i=0; i<apps.length; i++) {
        let res = await axios.get(`https://itunes.apple.com/hk/lookup?id=${apps[i].id}`);
        res.data.results[0].ranking = i + (page * 10 - 9)
        await appDetails.push(res.data.results[0]);
    };

    await dispatch({ type: FETCH_APP_LIST, payload: appDetails });
};

export const setPageNumber = (type, pageNum) => async dispatch => {
    let actionType = '';
    switch(type){
        case 'add':
            actionType = ADD_CURRENT_PAGE
            break;
        case 'subtract':
            actionType = SUBTRACT_CURRENT_PAGE
            break;
        default:
            actionType = SET_CURRENT_PAGE
            break;
    };
    dispatch({ type: actionType, payload: pageNum });
};