import React from 'react';
import PropTypes from 'prop-types';

import {Wrraper} from './styles';

export default function DefaultLayout ({ children }) {
    return <Wrraper>{children}</Wrraper>;
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};