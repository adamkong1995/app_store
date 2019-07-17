import { SET_CURRENT_PAGE, ADD_CURRENT_PAGE, SUBTRACT_CURRENT_PAGE } from '../actions/types';

export default (state=1, {payload, type}) => {
    switch (type) {
        case ADD_CURRENT_PAGE: // Max page = 10
            return payload < 10 ? payload + 1: state;
        case SUBTRACT_CURRENT_PAGE: // Min page = 0
            return payload > 1 ? payload - 1: state;
        case SET_CURRENT_PAGE:
            return payload;
        default:
            return state;
    };
};