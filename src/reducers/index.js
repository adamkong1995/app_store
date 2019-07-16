import { combineReducers } from 'redux';
import appListReducers from './appListReducer';
import pageNumReducer from './pageNumReducer';

export default combineReducers({
    appList: appListReducers,
    pageNum: pageNumReducer
});