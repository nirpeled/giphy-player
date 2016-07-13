import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import helpers from '../../helpers/helpers.js';
import VisibilitySensor from 'react-visibility-sensor';

// constants
import iconsConstants from '../../constants/icons-constants.js';

// actions
import * as feedActions from './feed-actions.js';

// components
import Preview from '../../components/preview/preview.js';
import Player from '../../components/player/player.js';

var FeedContainer = React.createClass({

    getInitialState: function() {

        return {
            isLoading: true,
            isPlaying: null
        }

    },

    componentDidMount: function() {
      
        var props = this.props;
        
        props.dispatch(feedActions.fetch()).then(
            () => this.setState({isLoading: false}),
            () => this.setState({isLoading: false})
        );

    },

    playVideo: function(itemId) {

        helpers.logger('[FeedContainer] playVideo');

        this.setState({
           isPlaying: itemId 
        });

    },

    closeVideo: function() {

        helpers.logger('[FeedContainer] closeVideo');

        this.setState({
           isPlaying: null 
        });

    },

    handleVisibilitySensor: function(isVisible) {

        helpers.logger('[FeedContainer] handleVisibilitySensor');

        var props = this.props,
            items = _.get(props, 'feed.items'),
            offset = _.size(items);

        if (isVisible) {
            props.dispatch(feedActions.fetch(offset));
        }

    },

    render: function () {

        helpers.logger('[FeedContainer] render');

        var props = this.props,
            state = this.state,
            items = _.get(props, 'feed.items'),
            item = state.isPlaying ? _.find(items, ['id', state.isPlaying]) : null;

        if (state.isLoading) {
            return (
                <section className="box-row box-feed">
                    <p className="spinner centered"><i className={iconsConstants.SPINNER} /></p>
                </section>
            );
        }

        return (
            <section className="box-row box-feed">

                {_.map(items, (item, index) => {
                    return <Preview key={item.id + '|' + index} {...item} playVideo={this.playVideo} />
                })}

                <VisibilitySensor onChange={this.handleVisibilitySensor}>
                    <p className="spinner"><i className={iconsConstants.SPINNER} /></p>
                </VisibilitySensor>
                
                {state.isPlaying ? <Player {...item} handleClose={this.closeVideo} /> : null}
                
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