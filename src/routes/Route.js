import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RouteWrraper({
    component: Component,
    isPrivate,
    ...rest
}) {

    return <Route {...rest} render={props => (
        <Component {...props} />
    )} />;

}

RouteWrraper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrraper.defaultProps = {
    isPrivate: false,
};
