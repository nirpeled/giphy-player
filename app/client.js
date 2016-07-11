import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import queryString from 'query-string';
import { Provider } from 'react-redux';
import routes from './routes.js';
import configService from './services/config.js';
import apiService from './services/api-service.js';
import storeService from './store/store.js';

var history,
    store,
    dispatch,
    unlisten;

history = browserHistory;
configService.init(window.__config);
apiService.init({baseUrl: '/'});
storeService.init(window.__state);
store = storeService.get();
dispatch = store.dispatch;

function route(location, callback) {

    match({routes, location}, (error, redirectLocation, renderProps) => {

        // handle redirect url
        if (redirectLocation) {
            history.replace(redirectLocation.pathname + redirectLocation.search);
            return;
        }

        var query = queryString.parse(location.search),
            params = renderProps.params,
            component = renderProps.components[0],
            initStore = (component && component.WrappedComponent && component.WrappedComponent.initStore) ? component.WrappedComponent.initStore(dispatch, params, query) : Promise.resolve();

        Promise.resolve(initStore).then(

            () => {
                callback();
            }

        ).catch((error) => console.error(error.stack));

    });

}

unlisten = history.listen((location) => {

    route(location, () => {
        unlisten();
        ReactDOM.render(<Provider store={store}><Router history={history}>{routes}</Router></Provider>, document);
    });

});

history.listenBefore((location, callback) => {
    route(location, callback);
});