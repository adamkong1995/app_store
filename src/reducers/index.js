import { combineReducers } from 'redux';
import keywordReducer from './keywordReducer';
import recommendedReducer from './recommendedReducer';
import appListReducer from './appListReducer';
import pageNumReducer from './pageNumReducer';

export default combineReducers({
    keyword: keywordReducer,
    recommended: recommendedReducer,
    appList: appListReducer,
    pageNum: pageNumReducer
});