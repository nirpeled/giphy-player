import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RootContainer from './containers/root/root-container.js';
import FeedContainer from './containers/feed/feed-container.js';

export default (
    <Route path="/" component={RootContainer}>
        <IndexRoute component={FeedContainer} />
    </Route>
);
