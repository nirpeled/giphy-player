import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Preview = React.createClass({

    handleClick: function(e) {

        e.preventDefault();

        helpers.logger('[Preview] handleClick');

        var props = this.props;
        
        props.playVideo(props.id);
        
    },
    
    render: function () {

        helpers.logger('[Preview] render');
        
        var props = this.props,
            image = _.get(props, 'images.original_still.url'),
            style = {backgroundImage: 'url(' + image + ')'};

        return (
            <article className="box-preview" onClick={this.handleClick}>
                <span className="preview" style={style} />
                <i className={iconsConstants.PLAY} />
            </article>
        );
    }
});

export default Preview;