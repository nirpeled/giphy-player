import _ from 'lodash';
import helpers from '../../helpers/helpers.js';
import feedConstants from './feed-constants.js';

export default function feed(state = {}, action = {}) {

    switch (action.type) {

        case feedConstants.FETCH_REQUEST:
        case feedConstants.FETCH_ERROR:

            helpers.logger('[FeedReducer] ' + action.type);

            return _.assign({}, state, action);

        case feedConstants.FETCH_SUCCESS:

            helpers.logger('[FeedReducer] ' + action.type);

            return _.assign({}, state, action, {
                items: _.concat(state.items || [], action.items)
            });

        default:

            return state;

    }

}