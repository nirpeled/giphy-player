import { combineReducers } from 'redux';

import feed from '../feed/feed-reducer.js';

const rootReducer = combineReducers({
    feed
});

export default rootReducer;
