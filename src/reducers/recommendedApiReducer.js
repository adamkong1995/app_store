import { FETCH_RECOMMENDED_API } from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_RECOMMENDED_API:
            return action.payload;
        default:
            return state;
    };
};