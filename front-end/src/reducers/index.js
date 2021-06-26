import diaryReducer from './diaries';
import favListReducer from './favList';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    diaries : diaryReducer,
    favList: favListReducer
})

export default allReducers;