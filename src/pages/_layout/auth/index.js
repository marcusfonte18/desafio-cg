import React from 'react';
import PropTypes from 'prop-types';

import { Wrraper, Content } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrraper>
            <Content>{children}</Content>
        </Wrraper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
};