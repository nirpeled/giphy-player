import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Preview = React.createClass({

    getInitialState: function() {

        return {
            image: null
        }

    },

    componentDidMount: function() {

        var props = this.props,
            url = _.get(props, 'images.original_still.url');

        helpers.convertImageToData(url, (image) => {
            this.setState({image})
        })

    },

    handleClick: function(e) {

        e.preventDefault();

        helpers.logger('[Preview] handleClick');

        var props = this.props;
        
        props.playVideo(props.id);
        
    },
    
    render: function () {

        helpers.logger('[Preview] render');
        
        var props = this.props,
            state = this.state,
            style = {backgroundImage: 'url(' + state.image + ')'};
            

        if (!state.image) {
            return (
                <article className="box-preview">
                    <p className="spinner"><i className={iconsConstants.SPINNER} /></p>
                </article>
            );
        }
        
        return (
            <article className="box-preview clickable" onClick={this.handleClick}>
                <span className="preview" style={style} />
                <i className={iconsConstants.PLAY} />
            </article>
        );
    }
});

export default Preview;