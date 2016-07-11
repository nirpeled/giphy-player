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

var FeedContainer = React.createClass({

    componentDidMount: function() {
      
        var props = this.props;
        
        props.dispatch(feedActions.fetch());
        
    },
    
    render: function () {

        helpers.logger('[FeedContainer] render');

        var props = this.props;

        console.log('props', props);

        return (
            <section className="box-row box-feed">

                <h1>Loading</h1>
                
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