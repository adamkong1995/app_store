import { FETCH_APP_LIST } from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_APP_LIST:
            return action.payload;
        default:
            return state;
    };
};