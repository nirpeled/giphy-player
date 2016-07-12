import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import helpers from '../../helpers/helpers.js';

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

    render: function () {

        helpers.logger('[FeedContainer] render');

        var props = this.props,
            state = this.state,
            items = _.get(props, 'feed.items'),
            item = state.isPlaying ? _.find(items, ['id', state.isPlaying]) : null;

        if (state.isLoading) {
            return (
                <section className="box-row box-feed">
                    <h1>Loading</h1>
                </section>
            );
        }

        return (
            <section className="box-row box-feed">

                {_.map(items, (item, index) => {
                    return <Preview key={item.id + '|' + index} {...item} playVideo={this.playVideo} />
                })}

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