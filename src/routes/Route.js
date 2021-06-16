import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export default function RouteWrraper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = true;

    if (!signed && isPrivate) {
        return <Redirect to='/' />;
    }

    if (signed && !isPrivate) {
        return <Redirect to='/dashboard' />;
    }

    return <Route {...rest} component={Component} />;

}

RouteWrraper.PropTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrraper.defaultProps = {
    isPrivate: false,
};