import { FETCH_APP_API } from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_APP_API:
            return action.payload;
        default:
            return state;
    };
};