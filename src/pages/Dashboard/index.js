import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import GraficoPizza from '../../components/Graphic';

import { Wrraper } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrraper>
            <Header>{children}</Header>
            <GraficoPizza />
        </Wrraper>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.element
};
