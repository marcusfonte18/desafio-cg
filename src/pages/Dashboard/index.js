import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';


import { Wrraper, WrraperContainer } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrraper>
            <Header>{children}</Header>
            <WrraperContainer>
            </WrraperContainer>
        </Wrraper>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};