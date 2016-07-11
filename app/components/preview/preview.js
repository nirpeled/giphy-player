import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import helpers from '../../helpers/helpers.js';
import classNames from 'classnames';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Preview = React.createClass({

    render: function () {

        var props = this.props,
            image = _.get(props, 'images.downsized_still.url'),
            style = {backgroundImage: 'url(' + image + ')'};

        console.log(props);

        return (
            <div className="box-preview">
                <span className="preview" style={style} />
                <i className={iconsConstants.PLAY} />
            </div>
        );
    }
});

export default Preview;