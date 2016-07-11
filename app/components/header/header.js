import _ from 'lodash';
import React from 'react';
import helpers from '../../helpers/helpers.js';

// constants
import iconsConstants from '../../constants/icons-constants.js';

var Header = React.createClass({

    render: function () {

        helpers.logger('[Header] render');

        return (
            <header>
                <h1><i className={iconsConstants.TV} /> Giphy Player</h1>
            </header>
        );
    }
});

export default Header;