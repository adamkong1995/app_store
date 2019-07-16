import { FETCH_RECOMMENDED_LIST } from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_RECOMMENDED_LIST:
            return action.payload;
        default:
            return state;
    };
};