import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';
import classNames from 'classnames';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Player = React.createClass({

    getInitialState: function() {

        return {
            orientation: this.calculateOrientation()
        }

    },

    componentDidMount: function() {

        window.addEventListener('orientationchange', this.handleOrientationChange, true);

    },

    componentWillUnmount: function() {

        window.removeEventListener('orientationchange', this.handleOrientationChange, true);

    },

    calculateOrientation: function() {

        return (window.innerWidth > window.innerHeight) ? 'horizontal' : 'vertical';

    },

    handleOrientationChange: function() {

        this.setState({orientation: this.calculateOrientation()})

    },

    handleClose: function(e) {
       
        e.preventDefault();

        helpers.logger('[Player] handleClose');

        var props = this.props;
       
        props.handleClose();
       
    },
    
    render: function () {

        helpers.logger('[Player] render');

        var props = this.props,
            state = this.state,
            image = _.get(props, 'images.original.url'),
            videoWidth = parseInt(_.get(props, 'images.original.width')),
            videoHeight = parseInt(_.get(props, 'images.original.height')),
            videoRatio = videoWidth / videoHeight,
            videoOrientation = (videoWidth > videoHeight) ? 'horizontal' : 'vertical';

        console.log('state', state);
        console.log('videoWidth', videoWidth);
        console.log('videoHeight', videoHeight);
        console.log('videoRatio', videoRatio);
        console.log('videoOrientation', videoOrientation);

        return (
            <section className={classNames('box-player', state.orientation)}>
                <i className={iconsConstants.CLOSE} onClick={this.handleClose} />
                <img className={videoOrientation} src={image} />
            </section>
        );
    }
});

export default Player;