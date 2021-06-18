import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AuthLayout from '../pages/_layout/auth';
// import DefaultLayout from '../pages/_layout/default';

export default function RouteWrraper({
    component: Component,
    isPrivate,
    ...rest
}) {
    // const signed = true;

    // if (!signed && isPrivate) {
    //     return <Redirect to='/' />;
    // }

    // if (signed && !isPrivate) {
    //     return <Redirect to='/dashboard' />
    // }

    // const Layout = signed ? DefaultLayout : AuthLayout;

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