import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Player = React.createClass({

    getInitialState: function() {

        return {
            image: null
        }

    },

    componentDidMount: function() {

        var props = this.props,
            url = _.get(props, 'images.original.url');

        helpers.convertImageToData(url, (image) => {
            this.setState({image})
        })

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
            style = {
                width: _.min([window.innerWidth, window.innerHeight]),
                backgroundImage: 'url(' + state.image + ')'
            };

        if (!state.image) {
            return (
                <article className="box-player">
                    <p className="spinner"><i className={iconsConstants.SPINNER} /></p>
                </article>
            );
        }

        return (
            <section className="box-player">
                <span className="close" onClick={this.handleClose}><i className={iconsConstants.CLOSE} /></span>
                <span className="video" style={style} />
            </section>
        );
    }
});

export default Player;