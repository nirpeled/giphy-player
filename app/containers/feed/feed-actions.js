import _ from 'lodash';
import apiService from '../../services/api-service.js';
import helpers from '../../helpers/helpers.js';
import feedConstants from './feed-constants.js';

export function fetch(offset) {

    helpers.logger('[FeedActions] fetch');

    return (dispatch, getState) => {

        dispatch({
            type: feedConstants.FETCH_REQUEST
        });

        return apiService.instance.fetch(offset).then(

            (response) => {
                dispatch(fetchSuccess(response));
            },

            (error) => {
                dispatch(fetchError(error));
            }

        );

    }

}

function fetchSuccess(response) {

    helpers.logger('[FeedActions] fetchSuccess');

    return {
        type: feedConstants.FETCH_SUCCESS,
        items: response.data
    }

}

function fetchError(error) {

    helpers.logger('[FeedActions] fetchError');

    return {
        type: feedConstants.FETCH_ERROR,
        error
    }

}