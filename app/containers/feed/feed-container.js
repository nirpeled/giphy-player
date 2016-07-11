import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

// actions
import * as feedActions from './feed-actions.js';

// components
import Preview from '../../components/preview/preview.js';

var FeedContainer = React.createClass({

    getInitialState: function() {

        return {
            isLoading: true
        }

    },

    componentDidMount: function() {
      
        var props = this.props;
        
        props.dispatch(feedActions.fetch()).then(
            () => this.setState({isLoading: false}),
            () => this.setState({isLoading: false})
        );

    },

    render: function () {

        helpers.logger('[FeedContainer] render');

        var props = this.props,
            state = this.state,
            items = _.get(props, 'feed.items');

        if (state.isLoading) {
            return (
                <section className="box-row box-feed">
                    <h1>Loading</h1>
                </section>
            );
        }

        return (
            <section className="box-row box-feed">

                {_.map(items, (item) => {
                    return <Preview {...item} />
                })}
                
            </section>
        );
    }
});

function mapStateToProps(state) {
    return {
        feed: _.get(state, 'feed')
    };
}

export default connect(mapStateToProps)(FeedContainer);