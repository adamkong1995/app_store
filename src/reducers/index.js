import { combineReducers } from 'redux';
import keywordReducer from './keywordReducer';
import recommendedReducer from './recommendedReducer';
import appListReducer from './appListReducer';
import pageNumReducer from './pageNumReducer';
import appApiReducer from './appApiReducer';
import recommendedApiReducer from './recommendedApiReducer';

export default combineReducers({
    keyword: keywordReducer,
    recommended: recommendedReducer,
    appList: appListReducer,
    pageNum: pageNumReducer,
    appApi: appApiReducer,
    recommendedApi: recommendedApiReducer
});