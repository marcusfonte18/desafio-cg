import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../../components/Graphic'
import Header from '../../components/Header';

import { Wrraper, WrraperContainer } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrraper>
            <Header>{children}</Header>
            <WrraperContainer>
                <PieChart />
            </WrraperContainer>
        </Wrraper>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};