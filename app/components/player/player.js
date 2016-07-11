import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';
import classNames from 'classnames';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Player = React.createClass({

    handleClose: function(e) {
       
        e.preventDefault();
       
        var props = this.props;
       
        props.handleClose();
       
    },
    
    render: function () {

        var props = this.props;

        return (
            <section className="box-player">
                <i className={iconsConstants.CLOSE} onClick={this.handleClose}/>
            </section>
        );
    }
});

export default Player;