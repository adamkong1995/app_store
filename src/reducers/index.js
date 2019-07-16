import { combineReducers } from 'redux';
import recommendedReducer from './recommendedReducer';
import appListReducer from './appListReducer';
import pageNumReducer from './pageNumReducer';

export default combineReducers({
    recommended: recommendedReducer,
    appList: appListReducer,
    pageNum: pageNumReducer
});