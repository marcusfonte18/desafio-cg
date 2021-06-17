import React from 'react';
import PropTypes from 'prop-types';

import {Wrraper} from './styles';

export default function AuthLayout ({ children }) {
    return <Wrraper>{children}</Wrraper>;
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
};