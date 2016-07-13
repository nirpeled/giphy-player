import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Player = React.createClass({

    handleClose: function(e) {
       
        e.preventDefault();

        helpers.logger('[Player] handleClose');

        var props = this.props;
       
        props.handleClose();
       
    },
    
    render: function () {

        helpers.logger('[Player] render');

        var props = this.props,
            image = _.get(props, 'images.original.url'),
            style = {
                width: _.min([window.innerWidth, window.innerHeight]),
                backgroundImage: 'url(' + image + ')'
            };

        return (
            <section className="box-player">
                <span className="close" onClick={this.handleClose}><i className={iconsConstants.CLOSE} /></span>
                <span className="video" style={style} />
            </section>
        );
    }
});

export default Player;